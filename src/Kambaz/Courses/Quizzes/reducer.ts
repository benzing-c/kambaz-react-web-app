import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  quizzes: [],
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, { payload: quiz }) => {
      const newQuiz: any = {
        _id: uuidv4(),
        title: quiz.title,
        course: quiz.course,
        description: quiz.description,
        points: quiz.points,
        due: quiz.due,
        available: quiz.available,
        until: quiz.until,
        type: quiz.type,
        group: quiz.group,
        shuffle: quiz.shuffle,
        time: quiz.time,
        numAttempts: quiz.numAttempts,
        showCorrectAnswer: quiz.showCorrectAnswer,
        accessCode: quiz.accessCode,
        oneAtATime: quiz.oneAtATime,
        webcamRequired: quiz.webcamRequired,
        lockQuestions: quiz.lockQuestions
      };
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter(
        (a: any) => a._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
        state.quizzes = state.quizzes.map((a: any) =>
            a._id === quiz._id ? quiz : a
        ) as any;
    },
  },
});
export const { addQuiz, updateQuiz, deleteQuiz, setQuizzes } =
  quizzesSlice.actions;
export default quizzesSlice.reducer;