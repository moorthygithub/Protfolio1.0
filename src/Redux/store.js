import { configureStore, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";

const persistConfig = {
  key: "auth",
  storage,
};

// const authSlice = createSlice({
//   name: "auth",
//   initialState: { isAuthenticated: false },
//   reducers: {
//     login: (state, action) => {
//       const { username, password } = action.payload;
//       if (username === "admin" && password === "123456") {
//         state.isAuthenticated = true;
//       }
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//     },
//   },
// });
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    darkMode: true,
  },
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

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: { auth: persistedReducer },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
