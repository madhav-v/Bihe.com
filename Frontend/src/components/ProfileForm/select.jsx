import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";

const InputSelect = (props) => {
  const animatedComponents = makeAnimated();

  // const handleChange = (selectedOption) => {
  //   props.onChange(selectedOption.value);
  // };
  return (
    <>
      <div className={`my-1 ${props.classes2 && props.classes2}`}>
        {props.label && (
          <label
            className={`text-md lg:text-xl xl:text-2xl ${
              props.classes1 && props.classes1
            }`}
            htmlFor=""
          >
            {props.label && props.label}
          </label>
        )}
        <CreatableSelect
          closeMenuOnSelect={true}
          components={animatedComponents}
          // defaultValue={[props.default && props.default]}
          options={props.options && props.options}
          // onChange={(selectedOption) => {
          //   // Handle the selected option and update the form using Formik's handleChange
          //   const value = selectedOption ? selectedOption.value : ""; // Extract the value
          //   props.onChange &&
          //     props.onChange({ target: { name: props.name, value } });
          // }}
          onChange={props.onChange && props.onChange}
          // setValue={{ value: "hello", label: "Hello" }}
          value={props.options.find(
            (option) =>
              option.value === props.value || option.label === props.value
          )}
          // onChange={handleChange}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              padding: "2px 5px",
            }),
          }}
        />
        {props.error && <p className="text-red-500 text-sm">{props.error}</p>}
      </div>
    </>
  );
};

export default InputSelect;
