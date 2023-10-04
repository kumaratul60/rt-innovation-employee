import { buttonData, daysOfWeek, formatDate } from "../../utils/AddPageUTILS";
import useCalendarState from "../../hooks/useCalendarState";

const Calendar = ({ onDateSelected, onCloseModal, selectedDates }) => {
  const {
    currentMonth,
    currentYear,
    selectedDate,
    clickedButton,
    calendarData,
    nextMonth,
    prevMonth,
    handleDateClick,
    handleButtonClick,
  } = useCalendarState(selectedDates);

  const handleSaveClick = () => {
    onDateSelected(selectedDate);
    onCloseModal();
  };

  const handleCancelClick = () => {
    onDateSelected("");
    onCloseModal();
  };

  return (
    <>
      <div className=" h-[100vh] mx-auto relative w-full">
        <div className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[202px] md:px-10 sm:px-5 w-full bg-black bg-opacity-50">
          <div className="flex flex-col items-start justify-start md:ml-[0] w-auto sm:w-full">
            <div className="bg-white-A700  flex flex-col gap-6 items-center justify-start pb-4 pt-6 px-4 rounded-tl-[16px] rounded-tr-[16px] w-auto md:w-full">
              <div className="flex flex-col items-start justify-start w-auto gap-4">
                {buttonData.map((buttonRow, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-start justify-start w-auto gap-4"
                  >
                    {buttonRow.map((text, buttonIndex) => (
                      <button
                        key={buttonIndex}
                        className={`topback font-sans cursor-pointer text-center  w-[170px] sm:w-[150px] rounded text-sm bg-blue-50 text-blue-500 p-[9px] fill ${
                          clickedButton === text ? "topback-select" : ""
                        }`}
                        onClick={() => handleButtonClick(text)}
                      >
                        {text}
                      </button>
                    ))}
                  </div>
                ))}
              </div>

              <div className="flex flex-row items-center justify-center w-full">
                <div
                  className="ihover cursor-pointer flex flex-col items-center justify-start w-[20%]"
                  onClick={prevMonth}
                >
                  ←
                </div>
                <p className="justify-center font-sans font-bold rounded text-blue_gray-900 text-center text-[20px] w-auto">
                  {`${new Date(currentYear, currentMonth).toLocaleString(
                    "default",
                    {
                      month: "long",
                    }
                  )} ${currentYear}`}
                </p>
                <div
                  className="ihover cursor-pointer flex flex-col items-center justify-start w-[20%]"
                  onClick={nextMonth}
                >
                  →
                </div>
              </div>

              <div className="flex flex-row gap-[25.5px] items-start justify-start w-auto">
                <div className="containerdiv sm:flex-col flex-row gap-[25px] grid grid-cols-7 w-[100%] horizontal">
                  {daysOfWeek.map((day, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-[23px] items-center justify-start w-full"
                    >
                      <p className="font-sans text-[15px] text-blue_gray-900 text-center">
                        {day}
                      </p>

                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                        {calendarData.map((week, weekIndex) =>
                          week[index] !== null ? (
                            <div
                              key={weekIndex}
                              className={`custom-circle flex flex-col items-center justify-start w-full ${
                                weekIndex === 0 &&
                                index === new Date().getDay() &&
                                currentMonth === new Date().getMonth()
                                  ? "borderdiv"
                                  : ""
                              } ${
                                formatDate(
                                  week[index],
                                  currentYear,
                                  currentMonth
                                ) === selectedDate
                                  ? "custom-circle-select"
                                  : ""
                              }`}
                              onClick={() => handleDateClick(week[index])}
                            >
                              <p className="textp text-[15px] text-center font-sans">
                                {week[index]}
                              </p>
                            </div>
                          ) : (
                            <div
                              key={weekIndex}
                              className="mb-[23px] flex flex-col items-center justify-start w-full"
                            ></div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white-A700 border-gray-100 border-solid border-t flex flex-row gap-5 items-center justify-start p-4 rounded-bl-[16px] rounded-br-[16px] w-[100%] md:w-full">
              <div className="flex flex-col items-start justify-start w-1/2 bg-white-A700">
                <div className="flex flex-row gap-3 items-start justify-start w-[70%] md:w-full">
                  <img
                    className="h-[23px]"
                    src="images/img_eventfill0wght300grad0opsz24_1_1.svg"
                    alt="calendar"
                  />
                  <p className="mt-0 font-sans text-base font-medium text-blue_gray-900 ">
                    {selectedDate || "No Date"}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start w-auto gap-4">
                <div className="flex flex-col items-center justify-start w-[46%]">
                  <button
                    onClick={handleCancelClick}
                    className="font-sans rounded-lg bg-blue-50 text-blue-500 cursor-pointer font-medium  leading-[normal] min-w-[73px] sm:rounded-md text-center text-sm p-[9px]"
                  >
                    Cancel
                  </button>
                </div>
                <button
                  onClick={handleSaveClick}
                  className={`font-sans p-[9px] rounded-lg ${
                    selectedDate
                      ? "bg-blue-500 text-white-A700 cursor-pointer"
                      : "bg-gray-300 cursor-not-allowed"
                  } font-medium  leading-[normal] min-w-[73px] rounded-md text-center text-sm`}
                  disabled={!selectedDate}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
