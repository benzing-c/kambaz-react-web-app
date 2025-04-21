import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  responses: [],
};
const responsesSlice = createSlice({
  name: "responses",
  initialState,
  reducers: {
    setResponses: (state, action) => {
      state.responses = action.payload;
    },
    addResponse: (state, { payload: response }) => {
      state.responses = [...state.responses, response] as any;
    },
    removeUserResponses: (state, { payload: userId }) => {
      state.responses = state.responses.filter(
        (a: any) => a.user !== userId);
    },
  },
});
export const { setResponses, addResponse, removeUserResponses } =
  responsesSlice.actions;
export default responsesSlice.reducer;