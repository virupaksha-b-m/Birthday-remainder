import { createRoot } from "react-dom/client";
import react from "react";
import "./styles.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
