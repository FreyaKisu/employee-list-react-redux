import ActionTypes from "../actions/ActionTypes";

const initialState = {
  employeeList: []
}

export default function employees(state = initialState, payload) {

  switch (payload.type) {
    case ActionTypes.UPDATE_EMPLOYEES:
      return {
        ...state,
        employeeList: payload.employeeList
      }
      case ActionTypes.CHANGE_DEPARTMENT:
        const newState = {
          employeeList: {
            [payload.index]: {
              department: payload.department
            }
          }
        }
        return {
          ...state,
          newState
        }
        case ActionTypes.RAISE_SALARY:
          state.employeeList[payload.index].salary += 100

          return {
            ...state
          }
          case null:
            break;
          default:
            return {
              ...state
            };
  }
}