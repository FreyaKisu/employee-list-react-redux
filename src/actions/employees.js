import ActionTypes from "./ActionTypes";
import fetchTestEmployees from "../Models/EmployeeData";

export const employeesFetch = employeeList => ({
  type: ActionTypes.FETCH_EMPLOYEES,
  employeeList: employeeList
});

export const fetchEmployees = () => {
  return async (dispatch, getState) => {
    const employeeList = fetchTestEmployees();
    dispatch(employeesFetch());
    /* return {
      type: null
    };
  };*/

    return {
      type: ActionTypes.FETCH_EMPLOYEES,
      employeeList: fetchTestEmployees()
    };
  };
};
