import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "../../database";

const Card = ({ employeeData, title, onEmployeeDeleted }) => {
  const navigate = useNavigate();

  const handleDelete = async (employeeId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      deleteEmployee(employeeId);
      onEmployeeDeleted();
    }
  };

  return (
    <>
      <div className="flex flex-col items-start justify-start w-full mt-5 mb-5">
        <div className="flex flex-col items-start justify-center w-full p-4 md:px-5">
          <p className="font-sans font-bold text-[22px] text-base text-blue-500 w-auto sm:font-medium ">
            {title}
          </p>
        </div>
        {employeeData.map((employee) => (
          <div
            key={employee.id}
            className="flex flex-row gap-[0.5px] items-start w-[100%] mt-1 cursor-pointer shadow-sm"
          >
            <div
              onClick={() => navigate(`/edit?employeeId=${employee.id}`)}
              className="edit-cursor bg-white-A700 flex flex-row sm:flex-col sm:items-start gap-[15rem] md:gap-[7rem] sm:gap-[0rem] items-center justify-start my-0 p-4 w-full"
            >
              <div className="flex flex-col items-start justify-start min-w-[15%]">
                <p className="w-auto font-sans text-lg font-bold text-gray-700">
                  {employee?.name}
                </p>
              </div>
              <div className="flex flex-col items-start justify-start min-w-[15%]">
                <p className="w-auto font-sans font-bold text-gray-600 text-md sm:font-medium ">
                  {employee?.role}
                </p>
              </div>
              <div className="flex flex-col items-start justify-start min-w-[15%]">
                <p className="w-auto font-sans text-sm font-bold text-gray-600 sm:font-medium ">
                  {employee.to
                    ? `${employee.from} - ${employee.to}`
                    : employee.from}
                </p>
              </div>
            </div>
            <div
              onClick={() => handleDelete(employee.id)}
              className=" bg-red-100 hover:bg-pink-200 w-[10%] h-[100%] sm:min-w-[20%] flex items-center justify-center text-2xl"
            >
              <button className="transition-transform duration-500 hover:rotate-90">
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
