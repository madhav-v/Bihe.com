import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import profileSvc from "../../../../services/profile.service";
import { toast } from "react-toastify";

const Bio = () => {
  const [bio, setBio] = useState("");
  const [edit, setEdit] = useState(false);
  const maxCharacters = 500;
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.User.loggedInUser);

  const handleBioChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxCharacters) {
      setBio(value);
      console.log(bio);
    }
  };

  const handleEdit = () => {
    console.log(edit);
    setEdit(true);
  };

  const handleCancel = () => {
    console.log(edit);
    setEdit(false);
  };

  const handleSave = async () => {
    const bioData = { bio };
    const response = await profileSvc.createBio({ bioData });
    if (response.success) {
      dispatch(loggedInUser(response.user));
      toast.success("Bio updated Successfully");
    } else {
      toast.error("Error in updating Bio");
    }
  };

  useEffect(() => {
    setBio(loggedInUser?.profile?.bio || "");
  }, [loggedInUser]);
  console.log(loggedInUser);
  return (
    <>
      {loggedInUser?.profile?.bio ? (
        <div className="mt-4">
          <div className="flex">
            <div>
              {edit ? (
                <>
                  <textarea
                    className="w-full h-40 p-2 border border-gray-300 rounded-md"
                    placeholder="Write your bio here..."
                    value={bio}
                    onChange={handleBioChange}
                  />
                  <div className="text-gray-500 text-right">
                    Characters left: {maxCharacters - bio.length}
                  </div>
                  )
                </>
              ) : (
                <div className="bg-red-500">{bio}</div>
              )}
            </div>
            <div>
              <button onClick={handleEdit}>Edit</button>
            </div>
            {edit ? (
              <>
                <div>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <>No Bio</>
      )}
    </>
  );
};

export default Bio;
