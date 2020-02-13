import ActionTypes from "../actions/ActionTypes";

const initialState = {
  employeeList: [{
    name: "TESTI",
    department: "TESTI",
    salary: 3000,
    id: 1234
  }]
}

export default function employees(state = initialState, action) {

  console.log('action',action)
  
  switch (action.type) {
    case ActionTypes.FETCH_EMPLOYEES:
      return {
        ...state,
        employeeList: action.employeeList
      }

    case null:
      break;
    default:
      return state;
  }
}