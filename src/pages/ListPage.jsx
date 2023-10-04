import { useEffect, useState } from "react";

import { Header, AddBtn, Card, EmptyRecord } from "../components";
import { getAllEmployees } from "../database";
import { splitEmployeesByDate } from "../utils/ListPageUTILS.js";

const ListPage = () => {
  const [previousEmployees, setPreviousEmployees] = useState([]);
  const [currentEmployees, setCurrentEmployees] = useState([]);

  const fetchEmployees = () => {
    getAllEmployees((data) => {
      const { previousEmployees, currentEmployees } =
        splitEmployeesByDate(data);
      setPreviousEmployees(previousEmployees);
      setCurrentEmployees(currentEmployees);
    });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEmployeeDeleted = () => {
    fetchEmployees();
  };

  return (
    <>
      <div className="h-[100vh] flex flex-col font-roboto items-start justify-start mx-auto w-full">
        {previousEmployees.length > 0 || currentEmployees.length > 0 ? (
          <div className="bg-gray-100 flex flex-col items-center w-full h-full">
            <Header title={"Employee List"} />
            {previousEmployees.length > 0 && (
              <Card
                title={"Current Employees"}
                employeeData={previousEmployees}
                onEmployeeDeleted={handleEmployeeDeleted}
              />
            )}
            {currentEmployees.length > 0 && (
              <Card
                title={"Previous Employees"}
                employeeData={currentEmployees}
                onEmployeeDeleted={handleEmployeeDeleted}
              />
            )}
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center w-full">
              <Header title={"Employee List"} />
            </div>
            <EmptyRecord />
          </>
        )}
      </div>
      <AddBtn />
    </>
  );
};

export default ListPage;
