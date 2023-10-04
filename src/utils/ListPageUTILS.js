export const splitEmployeesByDate = (employees) => {
  if (!Array.isArray(employees)) {
    throw new Error("Employees should be provided as an array.");
  }

  const currentEmployees = [];
  const previousEmployees = [];

  employees.forEach((employee) => {
    if (employee.from && employee.to) {
      currentEmployees.push(employee);
    } else {
      previousEmployees.push(employee);
    }
  });

  return { previousEmployees, currentEmployees };
};
