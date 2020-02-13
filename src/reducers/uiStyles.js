import ActionTypes from "../actions/ActionTypes";

const initialState = {
  uiStyles: []
};

export default function uiStyles(state = initialState, action) {
  /*const returnObject = {
    ...state
  };

  switch (action.type) {
    case ActionTypes.BACKGROUND_COLOR_CHANGE:
      returnObject.uiStyles = action.uiStyles;
      break;

    case null:
      break;
    default:
      return state;
  }
  */
  return state;
}
