const Image = () => {
  return (
    <>
      <div className="w-full flex justify-around items-center">
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Profile Image
          </label>

          <label className="cursor-pointer bg-red-500 text-white font-medium py-2 px-4 rounded-lg">
            Choose File
            <input
              type="file"
              name="image"
              className="hidden"
              required
              accept="image/*"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Image;
