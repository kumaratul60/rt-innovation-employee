const EmptyRecord = () => {
  return (
    <div className="bg-gray-100 flex flex-col font-roboto sm:gap-10 md:gap-10y justify-start mx-auto w-full h-[100vh]">
      <div className="flex flex-col md:gap-[10rem] justify-center h-[80%] gap-[100px] items-center w-full">
        <div className="flex flex-col items-center justify-start w-auto md:px-5">
          <div className="flex flex-col gap-1.5 items-center justify-start w-full">
            <img
              className="h-[218px]"
              src="images/img_group5363.svg"
              alt="group5363"
            />
            <p className="font-sans text-lg font-bold text-center text-blue_gray-900 sm:font-medium ">
              No employee records found.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyRecord;
