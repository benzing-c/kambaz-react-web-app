import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  questions: [],
};
const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    removeQuestion: (state, { payload: questionId }) => {
      state.questions = state.questions.filter(
        (a: any) => a._id !== questionId);
    },
    updateQuestion: (state, { payload: question }) => {
        state.questions = state.questions.map((a: any) =>
            a._id === question._id ? question : a
        ) as any;
    },
  },
});
export const { setQuestions, updateQuestion, removeQuestion } =
  questionsSlice.actions;
export default questionsSlice.reducer;