import {
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import BachgroundSound from "../assets/sounds/backgroundSound.mp3";

export enum GameActions {
  "TOGGLE_LEADERBOARD" = "TOGGLE_LEADERBOARD",
  "INIT_GAME" = "INIT_GAME",
  "START_GAME" = "START_GAME",
  "EXIT_GAME" = "EXIT_GAME",
  "PAUSE_GAME" = "PAUSE_GAME",
  "RESUME_GAME" = "RESUME_GAME",
  "FINISH_GAME" = "FINISH_GAME",
  "WIN_GAME" = "WIN_GAME",
  "LOSE_GAME" = "LOSE_GAME",
  "SET_LEVEL" = "SET_LEVEL",
  "SET_SCORE" = "SET_SCORE",
  "SET_TIMEPLAYED" = "SET_TIMEPLAYED",
  "TOGGLE_MUSIC" = "TOGGLE_MUSIC",
  "TOGGLE_WRONG" = "TOGGLE_WRONG",
  "TOGGLE_CORRECT" = "TOGGLE_CORRECT",
  "TOGGLE_HINT"="TOGGLE_HINT",
  "SET_QUESTION" = "SET_QUESTION",
}

type SetToggleLeaderboard = {
  type: typeof GameActions.TOGGLE_LEADERBOARD;
};

type ExitGame = {
  type: typeof GameActions.EXIT_GAME;
};

type SetToggleWrong = {
  type: typeof GameActions.TOGGLE_WRONG;
};

type SetToggleCorrect = {
  type: typeof GameActions.TOGGLE_CORRECT;
};

type SetToggleHint={
  type:typeof GameActions.TOGGLE_HINT;
}

type ToggleMusic = {
  type: typeof GameActions.TOGGLE_MUSIC;
};

type InitGame = {
  type: typeof GameActions.INIT_GAME;
};

type StartGame = {
  type: typeof GameActions.START_GAME;
};

type PauseGame = {
  type: typeof GameActions.PAUSE_GAME;
};

type ResumeGame = {
  type: typeof GameActions.RESUME_GAME;
};

type FinishGame = {
  type: typeof GameActions.FINISH_GAME;
};

type WinGame = {
  type: typeof GameActions.WIN_GAME;
};

type LoseGame = {
  type: typeof GameActions.LOSE_GAME;
};

type SetLevel = {
  type: typeof GameActions.SET_LEVEL;
  payload: number;
};

type SetScore = {
  type: typeof GameActions.SET_SCORE;
  payload: number;
};

type SetTimePlayed = {
  type: typeof GameActions.SET_TIMEPLAYED;
  payload: number;
};

type SetQuestion = {
  type: typeof GameActions.SET_QUESTION;
  payload: string;
};

type GameActionsType =
  | ToggleMusic
  | InitGame
  | SetToggleLeaderboard
  | StartGame
  | PauseGame
  | ResumeGame
  | FinishGame
  | WinGame
  | LoseGame
  | SetLevel
  | SetScore
  | SetTimePlayed
  | SetToggleWrong
  | ExitGame
  | SetQuestion
  | SetToggleCorrect
  |SetToggleHint;

export type GameState = {
  isGameInitialized?: boolean;
  isLeaderboardVisible: boolean;
  level: number;
  levelDuration: 600;
  score: number;
  timeplayed: number;
  isGamePaused: boolean;
  isGameStarted: boolean;
  isGameFinished: boolean;
  isGameWon: boolean;
  question: any;
  isGameLost: boolean;
  isMusicOn: boolean;
  isWrong: boolean;
  isCorrect: boolean;
  isHint:boolean;
  dispatch: React.Dispatch<GameActionsType>;
};

const initialState: GameState = {
  isGameInitialized: false,
  isLeaderboardVisible: false,
  level: 1,
  levelDuration: 600,
  score: 0,
  timeplayed: 0,
  isGamePaused: false,
  isGameStarted: false,
  isGameFinished: false,
  question: null,
  isGameWon: false,
  isGameLost: false,
  isMusicOn: false,
  isWrong: false,
  isCorrect: false,
  isHint:false,
  dispatch: () => null,
};

type GameContextType = {
  state: GameState;
  dispatch: React.Dispatch<GameActionsType>;
};
export const GameContext = createContext<GameContextType>({
  state: initialState,
  dispatch: () => null,
});

export const gameReducer = (state: GameState, action: any) => {
  switch (action.type) {
    case GameActions.INIT_GAME:
      return { ...state, isGameInitialized: true };
    case GameActions.TOGGLE_LEADERBOARD:
      return { ...state, isLeaderboardVisible: !state.isLeaderboardVisible };
    case GameActions.START_GAME:
      return { ...state, isGameStarted: true };
    case GameActions.EXIT_GAME:
      return { ...state, isGameStarted: false };
    case GameActions.PAUSE_GAME:
      return { ...state, isGamePaused: true };
    case GameActions.RESUME_GAME:
      return { ...state, isGamePaused: false };
    case GameActions.FINISH_GAME:
      return { ...state, isGameFinished: true, level: 1, score: 0 };
    case GameActions.WIN_GAME:
      return { ...state, isGameWon: true };
    case GameActions.LOSE_GAME:
      return { ...state, isGameLost: true };
    case GameActions.SET_LEVEL:
      return { ...state, level: action.payload };
    case GameActions.SET_SCORE:
      return { ...state, score: action.payload };
    case GameActions.SET_TIMEPLAYED:
      return { ...state, timeplayed: action.payload };
    case GameActions.TOGGLE_MUSIC:
      return { ...state, isMusicOn: !state.isMusicOn };
    case GameActions.TOGGLE_WRONG:
      return { ...state, isWrong: !state.isWrong };
    case GameActions.TOGGLE_CORRECT:
      return { ...state, isCorrect: !state.isCorrect };
      case GameActions.TOGGLE_HINT:
        return{...state,isHint:!state.isHint};

    case GameActions.SET_QUESTION:
      return { ...state, question: action.payload };

    default:
      return state;
  }
};

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    const audio = new Audio(BachgroundSound);
    audio.loop = true;

    if (state.isMusicOn === true) {
      audio.play();
    }

    return () => {
      audio.pause();
    };
  }, [state, dispatch]);

  const value: GameContextType = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
