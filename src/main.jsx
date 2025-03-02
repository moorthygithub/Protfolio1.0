import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <StrictMode>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StrictMode>
    </Provider>
  </PersistGate>
);
