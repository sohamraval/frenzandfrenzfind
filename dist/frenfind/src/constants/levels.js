"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.levels = void 0;
const levelOneBGImage_png_1 = __importDefault(require("../assets/images/levelOneBGImage.png"));
const levelTwoBGImage_png_1 = __importDefault(require("../assets/images/levelTwoBGImage.png"));
const levelThreeBGImage_png_1 = __importDefault(require("../assets/images/levelThreeBGImage.png"));
const levelFourBGImage_png_1 = __importDefault(require("../assets/images/levelFourBGImage.png"));
const levelFiveBGImage_png_1 = __importDefault(require("../assets/images/levelFiveBGImage.png"));
const leveSixBGImage_png_1 = __importDefault(require("../assets/images/leveSixBGImage.png"));
const levelSevenBGImage_png_1 = __importDefault(require("../assets/images/levelSevenBGImage.png"));
const levelEightBGImage_png_1 = __importDefault(require("../assets/images/levelEightBGImage.png"));
const leveNineBGImage_png_1 = __importDefault(require("../assets/images/leveNineBGImage.png"));
const questionsSetOneLevelOne_1 = require("./questionsSets/questionsSetOneLevelOne");
const questionsSetOneLevelTwo_1 = require("./questionsSets/questionsSetOneLevelTwo");
const questionsSetOneLevelThree_1 = require("./questionsSets/questionsSetOneLevelThree");
const questionSetTwoLevelOne_1 = require("./questionsSets/questionSetTwoLevelOne");
const questionSetTwoLevelTwo_1 = require("./questionsSets/questionSetTwoLevelTwo");
const questionSetTwoLevelThree_1 = require("./questionsSets/questionSetTwoLevelThree");
const questionSetThreeLevelOne_1 = require("./questionsSets/questionSetThreeLevelOne");
const questionSetThreeLevelTwo_1 = require("./questionsSets/questionSetThreeLevelTwo");
const questionSetThreeLevelThree_1 = require("./questionsSets/questionSetThreeLevelThree");
exports.levels = [
    {
        level: 1,
        questions: questionsSetOneLevelOne_1.questionsSetOneLevelOne,
        backgroundImage: {
            src: levelOneBGImage_png_1.default,
            alt: "Level One Background Image"
        },
        duration: 600
    },
    {
        level: 2,
        questions: questionsSetOneLevelTwo_1.questionsSetOneLevelTwo,
        backgroundImage: {
            src: levelTwoBGImage_png_1.default,
            alt: "Level Two Background Image"
        },
        duration: 600
    },
    {
        level: 3,
        questions: questionsSetOneLevelThree_1.questionsSetOneLevelThree,
        backgroundImage: {
            src: levelThreeBGImage_png_1.default,
            alt: "Level three Background Image"
        },
        duration: 600
    },
    {
        level: 4,
        questions: questionSetTwoLevelOne_1.questionSetTwoLevelOne,
        backgroundImage: {
            src: levelFourBGImage_png_1.default,
            alt: "Level Four Background Image"
        },
        duration: 600
    },
    {
        level: 5,
        questions: questionSetTwoLevelTwo_1.questionSetTwoLevelTwo,
        backgroundImage: {
            src: levelFiveBGImage_png_1.default,
            alt: "Level five Background Image"
        },
        duration: 600
    },
    {
        level: 6,
        questions: questionSetTwoLevelThree_1.questionSetTwoLevelThree,
        backgroundImage: {
            src: leveSixBGImage_png_1.default,
            alt: "Level Six Background Image"
        },
        duration: 600
    },
    {
        level: 7,
        questions: questionSetThreeLevelOne_1.questionSetThreeLevelOne,
        backgroundImage: {
            src: levelSevenBGImage_png_1.default,
            alt: "Level Seven Background Image"
        },
        duration: 600
    },
    {
        level: 8,
        questions: questionSetThreeLevelTwo_1.questionSetThreeLevelTwo,
        backgroundImage: {
            src: levelEightBGImage_png_1.default,
            alt: "Level Eight Background Image"
        },
        duration: 600
    },
    {
        level: 9,
        questions: questionSetThreeLevelThree_1.questionSetThreeLevelThree,
        backgroundImage: {
            src: leveNineBGImage_png_1.default,
            alt: "Level Nine Background Image"
        },
        duration: 600
    }
];
//# sourceMappingURL=levels.js.map