export default function createIteratorObject(report) {
  const employees = {};
  employees[Symbol.iterator] = function itr() {
    let employee = null;
    let count = 0;
    let done = false;
    return {
      next() {
        let employees = [];
        Object.values(report.allEmployees).forEach((item) => {
          employees = [...employees, ...item];
        });
        employee = employees[count];
        count += 1;
        if (count === employees.length + 1) {
          done = true;
        }
        return { value: employee, done };
      },
    };
  };
  return employees;
}
