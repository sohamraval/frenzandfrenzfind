import WrongAnswerSound1 from "../assets/sounds/wrongAnswerSounds/wrong.ogg"
import WrongAnswerSound2 from "../assets/sounds/wrongAnswerSounds/wrong2.ogg"
import WrongAnswerSound3 from "../assets/sounds/wrongAnswerSounds/wrong3.ogg"
import WrongAnswerSound4 from "../assets/sounds/wrongAnswerSounds/wrong4.ogg"
import WrongAnswerSound5 from "../assets/sounds/wrongAnswerSounds/wrong6.ogg"
import CorrectAnswerSound2 from "../assets/sounds/correctAnswerSounds/right.ogg"
import CorrectAnswerSound1 from "../assets/sounds/correctAnswerSounds/right2.ogg"
import CorrectAnswerSound3 from "../assets/sounds/correctAnswerSounds/right3.ogg"
import CorrectAnswerSound4 from "../assets/sounds/correctAnswerSounds/right4.ogg"
import CorrectAnswerSound5 from "../assets/sounds/correctAnswerSounds/right5.ogg"
import CorrectAnswerSound6 from "../assets/sounds/correctAnswerSounds/right6.ogg"
import CorrectAnswerSound7 from "../assets/sounds/correctAnswerSounds/right7.ogg"
import CorrectAnswerSound8 from "../assets/sounds/correctAnswerSounds/right8.ogg"
import CorrectAnswerSound9 from "../assets/sounds/correctAnswerSounds/right9.ogg"
import CorrectAnswerSound10 from "../assets/sounds/correctAnswerSounds/right10.ogg"
import BachgroundSound from "../assets/sounds/backgroundSound.mp3";
import Click from "../assets/sounds/click.ogg";
import Sound from "../interfaces/Sound.interface"

export const backgroundSound: Sound = {
    isPlaying: false,
    src: BachgroundSound,
    ended: false,
    paused: false,
    loop: true,
    volume: 0.5
}

export const click: Sound = {
    isPlaying: false,
    src: Click,
    ended: false,
    paused: false,
    loop: false,
    volume: 1
}

export const wrongAnswerSounds: Sound[] = [
    {
        isPlaying: false,
        src: WrongAnswerSound1,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: WrongAnswerSound2,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: WrongAnswerSound3,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: WrongAnswerSound4,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: WrongAnswerSound5,
        ended: false,
        paused: false,
        loop: false,
        volume: 1

    }
]

export const correctAnswerSounds: Sound[] = [
    {
        isPlaying: false,
        src: CorrectAnswerSound1,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: CorrectAnswerSound2,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: CorrectAnswerSound3,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: CorrectAnswerSound4,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: CorrectAnswerSound5,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: CorrectAnswerSound6,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: CorrectAnswerSound7,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: CorrectAnswerSound8,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: CorrectAnswerSound9,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    },
    {
        isPlaying: false,
        src: CorrectAnswerSound10,
        ended: false,
        paused: false,
        loop: false,
        volume: 1
    }
]