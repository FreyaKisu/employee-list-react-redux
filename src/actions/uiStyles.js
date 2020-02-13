import ActionTypes from "./ActionTypes";

export const backgroundColorChange = uiStyles => ({
  type: ActionTypes.BACKGROUND_COLOR_CHANGE,
  uiStyles: uiStyles
});

export const updateBackgound = (background) => {
  return {
    type: ActionTypes.BACKGROUND_COLOR_CHANGE,
    background
  };
};