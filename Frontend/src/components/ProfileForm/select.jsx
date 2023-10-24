import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";

const InputSelect = (props) => {
  const animatedComponents = makeAnimated();

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
          // placeholder={props.placeholder && props.placeholder}
          closeMenuOnSelect={true}
          components={animatedComponents}
          // defaultValue={[props.default && props.default]}
          // isMulti={props.isMulti ? true : false}
          options={props.options && props.options}
          onChange={(selectedOption) => {
            // Handle the selected option and update the form using Formik's handleChange
            props.onChange(props.name, selectedOption);
          }}
          setValue={{ value: "hello", label: "Hello" }}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              // border: 'none',
              // backgroundColor: '#f0efef',
              padding: "2px 5px",
              //   border: state.isFocused ? "none" : "none !important",
              // outline: state.isFocused ? 'none !important' : 'none',
              // borderBottom: '4px solid red',
            }),
          }}
        />
        {props.error && <p className="text-red-500 text-sm">{props.error}</p>}
      </div>
    </>
  );
};

export default InputSelect;
