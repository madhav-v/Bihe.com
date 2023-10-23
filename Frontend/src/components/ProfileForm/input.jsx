const Input = (props) => {
  return (
    <>
      <div className={`my-2 ${props.classes3 && props.classes3}`}>
        <label
          className={`text-md lg:text-lg xl:text-xl font-normal my-1 ${
            props.classes2 && props.classes2
          }`}
          htmlFor=""
        >
          {props.label && props.label}
        </label>
        <input
          name={props.name && props.name}
          className={`w-full ouline-none border-[1px] border-black/10 rounded py-2 text-sm placeholder:text-sm md:placeholder:text-lg ${
            props.classes && props.classes
          }`}
          type={props.type && props.type}
          placeholder={props.placeholder && props.placeholder}
          onChange={props.onChange && props.onChange}
          value={props.value && props.value}
        />
      </div>
    </>
  );
};

export default Input;
