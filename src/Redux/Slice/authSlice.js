import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  darkMode: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      if (username === "admin" && password === "123456") {
        state.isAuthenticated = true;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { login, logout, toggleTheme } = authSlice.actions;
export default authSlice.reducer;
