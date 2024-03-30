import LevelOneBackgroundImage from "../assets/images/levelOneBGImage.png"
import levelTwoBGImage from "../assets/images/levelTwoBGImage.png"
import levelThreeBGImage from "../assets/images/levelThreeBGImage.png"
import levelFourBGImage from "../assets/images/levelFourBGImage.png"
import levelFiveBGImage from "../assets/images/levelFiveBGImage.png"
import leveSixBGImage from "../assets/images/leveSixBGImage.png"
import levelSevenBGImage from "../assets/images/levelSevenBGImage.png"
import levelEightBGImage from "../assets/images/levelEightBGImage.png"
import leveNineBGImage from "../assets/images/leveNineBGImage.png"
import Level from "../interfaces/Level.interface"
import { questionsSetOneLevelOne } from "./questionsSets/questionsSetOneLevelOne"
import { questionsSetOneLevelTwo } from "./questionsSets/questionsSetOneLevelTwo"
import { questionsSetOneLevelThree } from "./questionsSets/questionsSetOneLevelThree"
import { questionSetTwoLevelOne } from "./questionsSets/questionSetTwoLevelOne"
import { questionSetTwoLevelTwo } from "./questionsSets/questionSetTwoLevelTwo"
import { questionSetTwoLevelThree } from "./questionsSets/questionSetTwoLevelThree"
import { questionSetThreeLevelOne } from "./questionsSets/questionSetThreeLevelOne"
import { questionSetThreeLevelTwo } from "./questionsSets/questionSetThreeLevelTwo"
import { questionSetThreeLevelThree } from "./questionsSets/questionSetThreeLevelThree"

export const levels: Array<Level> = [
    {
        level: 1,
        questions: questionsSetOneLevelOne,
        backgroundImage: {
            src: LevelOneBackgroundImage,
            alt: "Level One Background Image"
        },
        duration: 600
    },
    {
        level: 2,
        questions: questionsSetOneLevelTwo,
        backgroundImage: {
            src: levelTwoBGImage,
            alt: "Level Two Background Image"
        },
        duration: 600
    },
    {
        level: 3,
        questions: questionsSetOneLevelThree,
        backgroundImage: {
            src: levelThreeBGImage,
            alt: "Level three Background Image"
        },
        duration: 600
    },
    {
        level: 4,
        questions: questionSetTwoLevelOne,
        backgroundImage: {
            src: levelFourBGImage,
            alt: "Level Four Background Image"
        },
        duration: 600
    },
    {
        level: 5,
        questions: questionSetTwoLevelTwo,
        backgroundImage: {
            src: levelFiveBGImage,
            alt: "Level five Background Image"
        },
        duration: 600
    },
    {
        level: 6,
        questions: questionSetTwoLevelThree,
        backgroundImage: {
            src: leveSixBGImage,
            alt: "Level Six Background Image"
        },
        duration: 600
    },
    {
        level: 7,
        questions: questionSetThreeLevelOne,
        backgroundImage: {
            src: levelSevenBGImage,
            alt: "Level Seven Background Image"
        },
        duration: 600
    },
    {
        level: 8,
        questions: questionSetThreeLevelTwo,
        backgroundImage: {
            src: levelEightBGImage,
            alt: "Level Eight Background Image"
        },
        duration: 600
    },
    {
        level: 9,
        questions: questionSetThreeLevelThree,
        backgroundImage: {
            src: leveNineBGImage,
            alt: "Level Nine Background Image"
        },
        duration: 600
    }
]
