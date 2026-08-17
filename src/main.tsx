import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// Self-hosted display serif — only the weights actually used, so the payload
// stays small and there's no third-party font request.
import "@fontsource/playfair-display/latin-700.css";
import "@fontsource/playfair-display/latin-700-italic.css";
import "@fontsource/playfair-display/latin-800.css";
import "@fontsource/playfair-display/latin-800-italic.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
