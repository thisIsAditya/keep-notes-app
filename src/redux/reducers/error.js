import { createSlice } from "@reduxjs/toolkit";

export const error = createSlice({
  name: "error",
  initialState: {
    status: false,
    message: "",
  },
  reducers: {
    handleError: (state, { payload }) => {
      state.message = payload.message;
      state.status = payload.status;
    },
    clearSnackbar: (state) => {
      state.message = "";
      state.status = false;
    },
  },
});
const { actions, reducer } = error;

export const { handleError, clearSnackbar } = actions;
export default reducer;
