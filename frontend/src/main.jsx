import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

import NavigationProvider from "./context/NavigationContext";
import "leaflet/dist/leaflet.css";
import "./utils/leafletFix";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </StrictMode>
);