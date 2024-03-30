"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const App_tsx_1 = __importDefault(require("./App.tsx"));
require("./index.css");
const gameContext_tsx_1 = require("./context/gameContext.tsx");
const soundContext_tsx_1 = require("./context/soundContext.tsx");
const questionsContext_tsx_1 = require("./context/questionsContext.tsx");
client_1.default.createRoot(document.getElementById("root")).render(<react_1.default.StrictMode>
    <soundContext_tsx_1.SoundProvider>
      <gameContext_tsx_1.GameProvider>
        <questionsContext_tsx_1.QuestionProvider>
          <App_tsx_1.default />
        </questionsContext_tsx_1.QuestionProvider>
      </gameContext_tsx_1.GameProvider>
    </soundContext_tsx_1.SoundProvider>
  </react_1.default.StrictMode>);
//# sourceMappingURL=main.js.map