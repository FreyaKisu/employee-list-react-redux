import ActionTypes from "./ActionTypes";
import fetchTestEmployees from "../Models/EmployeeData";


export const fetchEmployees = () => {

  return {
    type: ActionTypes.UPDATE_EMPLOYEES,
    employeeList: fetchTestEmployees()
  }
};

export const updateEmployeeDepartment = (index, department) => {
  return {
    type: ActionTypes.CHANGE_DEPARTMENT,
    index,
    department
  }
}
export const updateEmployeeSalary = (index) => {
  return {
    type: ActionTypes.RAISE_SALARY,
    index
  }
}
