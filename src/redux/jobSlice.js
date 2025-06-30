import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: []
  },
  reducers: {
    addJob: (state, action) => {
      state.jobs.unshift(action.payload); // adds to beginning
    },
    removeJob: (state, action) => {
      state.jobs = state.jobs.filter(job => job._id !== action.payload);
    },
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const { addJob, removeJob, setJobs } = jobSlice.actions;
export default jobSlice.reducer;
