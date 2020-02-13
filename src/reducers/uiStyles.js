import ActionTypes from "../actions/ActionTypes";

const initialState = {
  background: '#fff'
}

export default function uiStyles(state = initialState, payload) {
  switch (payload.type) {
    case ActionTypes.BACKGROUND_COLOR_CHANGE:
      return {
        ...state,
        background: payload.background
      }

      case null:
        break;
      default:
        return state;
  }

}