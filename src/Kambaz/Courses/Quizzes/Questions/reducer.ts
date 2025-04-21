import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";
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
    // addQuiz: (state, { payload: quiz }) => {
    //   const newQuiz: any = {
    //     _id: uuidv4(),
    //     title: quiz.title,
    //     course: quiz.course,
    //     description: quiz.description,
    //     points: quiz.points,
    //     due: quiz.due,
    //     available: quiz.available,
    //     until: quiz.until,
    //     type: quiz.type,
    //     group: quiz.group,
    //     shuffle: quiz.shuffle,
    //     time: quiz.time,
    //     multipleAttempts: quiz.multipleAttempts,
    //     //todo SHOW CORRECT ANS
    //     accessCode: quiz.accessCode,
    //     oneAtATime: quiz.oneAtATime,
    //     webcamRequired: quiz.webcamRequired,
    //     lockQuestions: quiz.lockQuestions
    //   };
    //   state.quizzes = [...state.quizzes, newQuiz] as any;
    // },
    removeQuestion: (state, { payload: questionId }) => {
      state.questions = state.questions.filter(
        (a: any) => a._id !== questionId);
    },
    updateQuestion: (state, { payload: question }) => {
        state.questions = state.questions.map((a: any) =>
            a._id === question._id ? question : a
        ) as any;
    },
    // editModule: (state, { payload: moduleId }) => {
    //   state.modules = state.modules.map((m: any) =>
    //     m._id === moduleId ? { ...m, editing: true } : m
    //   ) as any;
    // },
  },
});
export const { setQuestions, updateQuestion, removeQuestion } =
  questionsSlice.actions;
export default questionsSlice.reducer;