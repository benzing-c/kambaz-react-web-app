import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: uuidv4(),
        title: assignment.title,
        course: assignment.course,
        description: assignment.description,
        points: assignment.points,
        due: assignment.due,
        available: assignment.available,
        until: assignment.until
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
        state.assignments = state.assignments.map((a: any) =>
            a._id === assignment._id ? assignment : a
        ) as any;
    },
    // editModule: (state, { payload: moduleId }) => {
    //   state.modules = state.modules.map((m: any) =>
    //     m._id === moduleId ? { ...m, editing: true } : m
    //   ) as any;
    // },
  },
});
export const { addAssignment, updateAssignment, deleteAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;