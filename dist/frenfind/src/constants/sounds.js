"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.correctAnswerSounds = exports.wrongAnswerSounds = exports.click = exports.backgroundSound = void 0;
const wrong_ogg_1 = __importDefault(require("../assets/sounds/wrongAnswerSounds/wrong.ogg"));
const wrong2_ogg_1 = __importDefault(require("../assets/sounds/wrongAnswerSounds/wrong2.ogg"));
const wrong3_ogg_1 = __importDefault(require("../assets/sounds/wrongAnswerSounds/wrong3.ogg"));
const wrong4_ogg_1 = __importDefault(require("../assets/sounds/wrongAnswerSounds/wrong4.ogg"));
const wrong6_ogg_1 = __importDefault(require("../assets/sounds/wrongAnswerSounds/wrong6.ogg"));
const right_ogg_1 = __importDefault(require("../assets/sounds/correctAnswerSounds/right.ogg"));
const right2_ogg_1 = __importDefault(require("../assets/sounds/correctAnswerSounds/right2.ogg"));
const right3_ogg_1 = __importDefault(require("../assets/sounds/correctAnswerSounds/right3.ogg"));
const right4_ogg_1 = __importDefault(require("../assets/sounds/correctAnswerSounds/right4.ogg"));
const right5_ogg_1 = __importDefault(require("../assets/sounds/correctAnswerSounds/right5.ogg"));
const right6_ogg_1 = __importDefault(require("../assets/sounds/correctAnswerSounds/right6.ogg"));
const right7_ogg_1 = __importDefault(require("../assets/sounds/correctAnswerSounds/right7.ogg"));
const right8_ogg_1 = __importDefault(require("../assets/sounds/correctAnswerSounds/right8.ogg"));
const right9_ogg_1 = __importDefault(require("../assets/sounds/correctAnswerSounds/right9.ogg"));
const right10_ogg_1 = __importDefault(require("../assets/sounds/correctAnswerSounds/right10.ogg"));
const backgroundSound_mp3_1 = __importDefault(require("../assets/sounds/backgroundSound.mp3"));
const click_ogg_1 = __importDefault(require("../assets/sounds/click.ogg"));
exports.backgroundSound = {
    isPlaying: false,
    src: backgroundSound_mp3_1.default,
    ended: false,
    paused: false,
    loop: true,
    volume: 0.5
};
exports.click = {
    isPlaying: false,
    src: click_ogg_1.default,
    ended: false,
    paused: false,
    loop: false,
    volume: 1
};
exports.wrongAnswerSounds = [
    {
        isPlaying: false,
        src: wrong_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: wrong2_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: wrong3_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: wrong4_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: wrong6_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    }
];
exports.correctAnswerSounds = [
    {
        isPlaying: false,
        src: right2_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: right_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: right3_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: right4_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: right5_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: right6_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: right7_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: right8_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: right9_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: right10_ogg_1.default,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    }
];
//# sourceMappingURL=sounds.js.map