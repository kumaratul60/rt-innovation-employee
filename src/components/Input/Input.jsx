const Input = ({ title, placeholder, id, name = "", value, onChange }) => {
  return (
    <div className="flex flex-col justify-start w-full gap-3">
      <div className="flex flex-row items-center justify-start w-auto gap-3">
        <img
          className="w-6 h-6"
          src="images/img_personfill0wg.svg"
          alt="personfill0wg"
        />
        <p className="w-auto font-sans text-base font-normal text-gray-500">
          {title}
        </p>
      </div>
      <input
        type="text"
        placeholder={placeholder || "Enter text"}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="font-sans border border-gray-400 border-solid h-[38px] md:ml-[0] rounded w-[100%] p-2.5"
      />
    </div>
  );
};

export default Input;
