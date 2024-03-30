"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const clsx_1 = __importDefault(require("clsx"));
const react_2 = require("react");
const LayoutOutlet = () => {
    const [setBgImage, setSetBgImage] = (0, react_2.useState)(true);
    const location = (0, react_router_dom_1.useLocation)();
    (0, react_1.useEffect)(() => {
        if (!location.pathname.includes("level")) {
            setSetBgImage(true);
        }
        else {
            setSetBgImage(false);
        }
    }, [location]);
    return (
    // <div className='relative bg-[url("./assets/images/endscr.png")] bg-cover w-dvw h-dvh'>
    <div className={(0, clsx_1.default)("relative bg-cover bg-no-repeat bg-top w-dvw h-dvh", setBgImage ? "bg-[url(./assets/images/homeImage.jpeg)]" : "")}>
      <react_router_dom_1.Outlet />
    </div>);
};
exports.default = LayoutOutlet;
//# sourceMappingURL=Layout.js.map