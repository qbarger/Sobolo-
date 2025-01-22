import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Correct import for createRoot
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";

// Correct usage of createRoot
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
