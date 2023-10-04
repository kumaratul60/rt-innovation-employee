import Select from "react-select";

const SelectInput = ({
  label,
  placeholder,
  options,
  isSearchable,
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-[11px] justify-start md:ml-[0] mt-[20px] sm:mt-[5px] w-[100%]">
      <div className="flex flex-row items-center justify-start w-auto gap-3">
        <img className="w-6 h-6" src="images/img_bag.svg" alt="bag" />
        <p className="w-auto font-sans text-base font-normal text-gray-500">
          {label}
        </p>
      </div>
      <Select
        className="font-sans"
        options={options}
        placeholder={placeholder || "Select an option"}
        isSearchable={isSearchable || false}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectInput;
