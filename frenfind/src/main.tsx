import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GameProvider } from "./context/gameContext.tsx";
import { SoundProvider } from "./context/soundContext.tsx";
import { QuestionProvider } from "./context/questionsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SoundProvider>
      <GameProvider>
        <QuestionProvider>
          <App />
        </QuestionProvider>
      </GameProvider>
    </SoundProvider>
  </React.StrictMode>
);
