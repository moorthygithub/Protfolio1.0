import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    darkMode: false,
    fontFamily: '"Rajdhani", sans-serif',
    primaryColor: "#1e40af",
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
  },
});

export const { toggleDarkMode, setFontFamily, setPrimaryColor } =
  settingsSlice.actions;
export default settingsSlice.reducer;
