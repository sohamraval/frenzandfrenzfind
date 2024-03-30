"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundProvider = exports.SoundContext = exports.SoundActions = void 0;
const react_1 = require("react");
const sounds_1 = require("../constants/sounds");
const shuffle_1 = require("../helpers/shuffle");
const Sound_service_1 = __importDefault(require("../services/Sound.service"));
var SoundActions;
(function (SoundActions) {
    SoundActions["TOGGLE_MUSIC"] = "TOGGLE_MUSIC";
    SoundActions["MUSIC_ON"] = "MUSIC_ON";
    SoundActions["PLAY_CLICK_SOUND"] = "PLAY_CLICK_SOUND";
    SoundActions["MUSIC_OFF"] = "MUSIC_OFF";
    SoundActions["PLAY_WRONG_SOUND"] = "PLAY_WRONG_SOUND";
    SoundActions["PLAY_CORRECT_SOUND"] = "PLAY_CORRECT_SOUND";
    SoundActions["STOP_ALL_SOUNDS"] = "STOP_ALL_SOUNDS";
    SoundActions["RESUME_ALL_SOUND"] = "RESUME_SOUND";
})(SoundActions || (exports.SoundActions = SoundActions = {}));
const initialState = {
    backgroundSound: new Sound_service_1.default(sounds_1.backgroundSound),
    clickSound: new Sound_service_1.default(sounds_1.click),
    isMusicOn: false,
    sound: new Sound_service_1.default(),
};
const soundReducer = (state, action) => {
    switch (action.type) {
        case SoundActions.PLAY_CLICK_SOUND: {
            if (!state.clickSound)
                return state;
            state.clickSound.playSound();
            return state;
        }
        case SoundActions.TOGGLE_MUSIC: {
            if (!state.backgroundSound)
                return state;
            if (state.isMusicOn) {
                state.backgroundSound.pauseSound();
                return Object.assign(Object.assign({}, state), { isMusicOn: false });
            }
            else {
                state.backgroundSound.playSound();
                return Object.assign(Object.assign({}, state), { isMusicOn: true });
            }
        }
        case SoundActions.PLAY_WRONG_SOUND: {
            if (!state.sound)
                return state;
            const sounds = (0, shuffle_1.shuffle)(sounds_1.wrongAnswerSounds);
            state.sound.setSound({
                src: sounds[0].src,
                isPlaying: false,
                ended: false,
                paused: false,
                loop: false,
                volume: 1,
            });
            state.sound.playSound();
            return state;
        }
        case SoundActions.PLAY_CORRECT_SOUND:
            if (!state.sound)
                return state;
            const sounds = (0, shuffle_1.shuffle)(sounds_1.correctAnswerSounds);
            state.sound.setSound({
                src: sounds[0].src,
                isPlaying: false,
                ended: false,
                paused: false,
                loop: false,
                volume: 1,
            });
            state.sound.playSound();
            return state;
        case SoundActions.STOP_ALL_SOUNDS:
            return Object.assign(Object.assign({}, state), { sound: null, backgroundSound: null, clickSound: null });
        case SoundActions.RESUME_ALL_SOUND:
            return Object.assign(Object.assign({}, state), { sound: new Sound_service_1.default(), clickSound: new Sound_service_1.default(sounds_1.click), backgroundSound: new Sound_service_1.default(sounds_1.backgroundSound) });
        case SoundActions.MUSIC_ON: {
            if (!state.backgroundSound)
                return state;
            state.backgroundSound.playSound();
            return Object.assign(Object.assign({}, state), { isMusicOn: true });
        }
        case SoundActions.MUSIC_OFF:
            if (!state.backgroundSound)
                return state;
            state.backgroundSound.pauseSound();
            return Object.assign(Object.assign({}, state), { isMusicOn: false });
        default:
            return state;
    }
};
exports.SoundContext = (0, react_1.createContext)({
    state: initialState,
    dispatch: () => null,
});
const SoundProvider = ({ children }) => {
    const [state, dispatch] = (0, react_1.useReducer)(soundReducer, initialState);
    return (<exports.SoundContext.Provider value={{ state, dispatch }}>
      {children}
    </exports.SoundContext.Provider>);
};
exports.SoundProvider = SoundProvider;
//# sourceMappingURL=soundContext.js.map