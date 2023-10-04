import { useNavigate } from "react-router-dom";

const AddBtn = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col fixed items-end md:px-10 sm:pr[2.25rem] px-[70px] mt-[-100px] sm:mt-[-150px] w-full">
      <button
        onClick={() => navigate("/create")}
        className="hover:rotate-90 transition-transform duration-500 flex h-[50px] items-center justify-center w-[50px] rounded-full bg-blue-500 p-4"
      >
        <img className="h-[18px]" src="images/img_plus.svg" alt="add icon" />
      </button>
    </div>
  );
};

export default AddBtn;
