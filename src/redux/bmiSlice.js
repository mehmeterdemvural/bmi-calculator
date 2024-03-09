import { createSlice, nanoid } from "@reduxjs/toolkit";

import calculateBMI from "../utility/calculateBMI";

// Get data from localStorage
const savedData = localStorage.getItem("bmiData");
const initialState = savedData ? JSON.parse(savedData) : [];

const bmiSlice = createSlice({
  name: "bmi",
  initialState: initialState,
  reducers: {
    addData: {
      prepare: (name, height, weight) => {
        return {
          payload: {
            id: nanoid(5),
            name: name,
            height,
            weight,
            score: calculateBMI(weight, height),
            date: new Date().toLocaleDateString(),
          },
        };
      },
      reducer: (state, action) => {
        // Add data to the state
        state.push(action.payload);

        // Add data to localStorage
        localStorage.setItem("bmiData", JSON.stringify(state));
      },
      // Define your other reducer actions here
    },
  },
});

export const { addData } = bmiSlice.actions;
export default bmiSlice.reducer;
