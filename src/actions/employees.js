import ActionTypes from "./ActionTypes";
import fetchTestEmployees from "../Models/EmployeeData";

export const employeesFetch = employeeList => ({
  type: ActionTypes.FETCH_EMPLOYEES,
  employeeList: employeeList
});

export const fetchEmployees = () => {

  return {
    type: ActionTypes.FETCH_EMPLOYEES,
    employeeList: fetchTestEmployees()
  }
};