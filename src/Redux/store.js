import { configureStore } from "@reduxjs/toolkit";
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

// Reducers
import authReducer from "./Slice/authSlice";
import settingsReducer from "./Slice/settingsSlice";

// Persist Configs
const authPersistConfig = {
  key: "auth",
  storage,
};

const settingsPersistConfig = {
  key: "settings",
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedSettingsReducer = persistReducer(
  settingsPersistConfig,
  settingsReducer
);

// Store
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    settings: persistedSettingsReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
