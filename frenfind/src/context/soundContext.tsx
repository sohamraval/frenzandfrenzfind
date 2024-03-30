import { createContext, useReducer, ReactNode } from "react";
import {
  wrongAnswerSounds,
  correctAnswerSounds,
  backgroundSound,
  click,
} from "../constants/sounds";
import { shuffle } from "../helpers/shuffle";
import SoundService from "../services/Sound.service";
import Sound from "../interfaces/Sound.interface";

export enum SoundActions {
  "TOGGLE_MUSIC" = "TOGGLE_MUSIC",
  "MUSIC_ON" = "MUSIC_ON",
  "PLAY_CLICK_SOUND" = "PLAY_CLICK_SOUND",
  "MUSIC_OFF" = "MUSIC_OFF",
  "PLAY_WRONG_SOUND" = "PLAY_WRONG_SOUND",
  "PLAY_CORRECT_SOUND" = "PLAY_CORRECT_SOUND",
  "STOP_ALL_SOUNDS" = "STOP_ALL_SOUNDS",
  "RESUME_ALL_SOUND" = "RESUME_SOUND",
}

type ToggleMusic = {
  type: typeof SoundActions.TOGGLE_MUSIC;
};

type PlayClickSound = {
  type: typeof SoundActions.PLAY_CLICK_SOUND;
};

type MusicOn = {
  type: typeof SoundActions.MUSIC_ON;
};

type MusicOff = {
  type: typeof SoundActions.MUSIC_OFF;
};

type PlayWrongSound = {
  type: typeof SoundActions.PLAY_WRONG_SOUND;
};

type PlayCorrectSound = {
  type: typeof SoundActions.PLAY_CORRECT_SOUND;
};

type StopAllSounds = {
  type: typeof SoundActions.STOP_ALL_SOUNDS;
};

type ResumeAllSounds = {
  type: typeof SoundActions.RESUME_ALL_SOUND;
};

export type SoundActiions =
  | ToggleMusic
  | PlayClickSound
  | PlayWrongSound
  | PlayCorrectSound
  | MusicOn
  | MusicOff
  | ResumeAllSounds
  | StopAllSounds;

export type SoundState = {
  backgroundSound: SoundService | null;
  clickSound?: SoundService | null;
  isMusicOn: boolean;
  sound: SoundService | null;
};

const initialState: SoundState = {
  backgroundSound: new SoundService(backgroundSound) as SoundService,
  clickSound: new SoundService(click) as SoundService,
  isMusicOn: false,
  sound: new SoundService() as SoundService,
};

const soundReducer = (state: SoundState, action: SoundActiions) => {
  switch (action.type) {
    case SoundActions.PLAY_CLICK_SOUND: {
      if (!state.clickSound) return state;
      state.clickSound.playSound();
      return state;
    }

    case SoundActions.TOGGLE_MUSIC: {
      if (!state.backgroundSound) return state;
      if (state.isMusicOn) {
        state.backgroundSound.pauseSound();
        return { ...state, isMusicOn: false };
      } else {
        state.backgroundSound.playSound();
        return { ...state, isMusicOn: true };
      }
    }
    case SoundActions.PLAY_WRONG_SOUND: {
      if (!state.sound) return state;
      const sounds: Sound[] = shuffle(wrongAnswerSounds as Sound[]);
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
      if (!state.sound) return state;
      const sounds: Sound[] = shuffle(correctAnswerSounds as Sound[]);
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
      return { ...state, sound: null, backgroundSound: null, clickSound: null };

    case SoundActions.RESUME_ALL_SOUND:
      return {
        ...state,
        sound: new SoundService(),
        clickSound: new SoundService(click),
        backgroundSound: new SoundService(backgroundSound),
      };

    case SoundActions.MUSIC_ON: {
      if (!state.backgroundSound) return state;
      state.backgroundSound.playSound();
      return { ...state, isMusicOn: true };
    }
    case SoundActions.MUSIC_OFF:
      if (!state.backgroundSound) return state;
      state.backgroundSound.pauseSound();
      return { ...state, isMusicOn: false };

    default:
      return state;
  }
};

export const SoundContext = createContext<{
  state: SoundState;
  dispatch: React.Dispatch<SoundActiions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(soundReducer, initialState);
  return (
    <SoundContext.Provider value={{ state, dispatch }}>
      {children}
    </SoundContext.Provider>
  );
};
