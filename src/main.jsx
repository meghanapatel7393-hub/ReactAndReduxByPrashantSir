import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App.jsx";
import BharatClock from "./BharatClock.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BharatClock />
    {/* <App /> */}
  </StrictMode>
);
