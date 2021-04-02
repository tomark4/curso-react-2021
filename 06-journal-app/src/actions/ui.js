import { types } from "../types/types";

export const setError = (message) => ({
  type: types.uiAddError,
  payload: message
});


export const removeError = () => ({
  type: types.uiRemoveError,
});

export const startLoading = () => ({
  type: types.uiStartLoading
});

export const stopLoading = () => ({
  type: types.uiStopLoading
});
