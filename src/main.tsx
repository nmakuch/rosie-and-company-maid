import "./index.css";
import "./Global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement =
  document.getElementById("root")!;

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

const fontLoadingTimeout =
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, 1500);
  });

const requiredFonts = document.fonts
  ? Promise.all([
    document.fonts.load(
      '400 1rem "Google Sans"'
    ),
    document.fonts.load(
      '600 1rem "Google Sans"'
    ),
  ])
    .then(() => undefined)
    .catch(() => undefined)
  : Promise.resolve();

function revealApp() {
  document.documentElement.classList.remove(
    "fonts-loading"
  );

  document.documentElement.classList.add(
    "fonts-ready"
  );
}

void Promise.race([
  requiredFonts,
  fontLoadingTimeout,
]).then(() => {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(
      revealApp
    );
  });
});