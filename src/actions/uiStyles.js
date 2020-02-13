import ActionTypes from "./ActionTypes";
import fetchTestUiStyles from "../Models/UiStylesData";

export const backgroundColorChange = uiStyles => ({
  type: ActionTypes.BACKGROUND_COLOR_CHANGE,
  uiStyles: uiStyles
});

export const updateBackgound = color => {
  return {
    type: ActionTypes.BACKGROUND_COLOR_CHANGE,
    uiStyles: fetchTestUiStyles(color)
  };
};
