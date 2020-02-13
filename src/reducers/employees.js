import ActionTypes from "../actions/ActionTypes";
import fetchTestEmployees from "../Models/EmployeeData";

export const initialState = {
  employeeList: fetchTestEmployees()
};

export default function employees(state = [], action) {
  switch (action.type) {
    case ActionTypes.FETCH_EMPLOYEES:
      state = action.employeeList;
      console.log("Fetching employees");
      console.log(state);
      break;

    case null:
      break;
    default:
      return state;
  }
}
