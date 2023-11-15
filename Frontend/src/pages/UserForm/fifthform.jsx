import Input from "../../components/ProfileForm/input";
import InputSelect from "../../components/ProfileForm/select";
import Button from "../../components/ProfileForm/profilebutton";

const FifthForm = (
  fifthFormValues,
  setFifthFormValues,
  setCurrentFormCount,
  currentFromCount
) => {
  const handlePrevClick = () => {
    setCurrentFormCount((prev) => prev - 1);
  };

  const weightOptions = [
    { value: "0.5", label: "Very Important" },
    { value: "0.2", label: "Least Important" },
    { value: "0.01", label: "Not Important" },
  ];
  return (
    <>
      <div className="mt-16 min-h-full mb-8 px-2 py-4  w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white  rounded-lg mx-auto">
        <form className=" mx-auto">
          <h1 className="text-2xl w-[90%] mx-auto mb-1 font-bold">
            How important are they to you?{" "}
          </h1>

          <div className="w-[90%] mx-auto flex flex-col justify-start items-center">
            <div className="flex w-[100%] justify-between mt-0">
              <InputSelect
                value={fifthFormValues.religionWeight}
                // onChange={handleMinHeightChange}
                placeholder="From"
                label="Religion"
                classes1="block text-md lg:text-lg 2xl:text-xl my-1"
                classes2="xl:w-[45%] basis-[45%] "
                options={weightOptions}
              />
              <InputSelect
                value={fifthFormValues.casteWeight}
                // onChange={handleMinHeightChange}
                placeholder="From"
                label="Caste"
                classes1="block text-md lg:text-lg 2xl:text-xl my-1"
                classes2="xl:w-[45%] basis-[45%] "
                options={weightOptions}
              />
            </div>
          </div>

          <div className="w-[90%] mx-auto flex flex-col justify-start items-center">
            <div className="flex w-full justify-between"></div>
          </div>
          <div className="w-full flex justify-around items-center"></div>
          <div className="w-full flex justify-around items-center"></div>

          <div className="w-full flex justify-around items-center"></div>

          <div className="w-full flex justify-around items-center"></div>

          <div className="w-full flex justify-around">
            <Button
              label="Previous"
              classes="px-16 py-3 rounded-xl btnnext text-white"
              classes2="w-full flex justify-center py-4"
              onClick={() => handlePrevClick()}
            />
            <Button
              type="submit"
              label="Submit"
              onClick={() => handleNextClick()}
              classes="px-16 py-3 rounded-xl btnnext text-white"
              classes2="w-full flex justify-center py-4"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FifthForm;
