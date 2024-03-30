import { ReactNode, createContext, useMemo, useReducer } from "react";
import Question from "../interfaces/Question.interface";

export enum QuestionActions {
  "SET_QUESTION" = "SET_QUESTION",
  "GET_QUESTION"="GET_QUESTION",
  "SET_ANSWER" = "SET_ANSWER",
  "SET_ANSWER_POSITION" = "SET_ANSWER_POSITION",
  "SET_QUESTION_POSITION" = "SET_QUESTION_POSITION",
  "SET_QUESTION_IMAGE" = "SET_QUESTION_IMAGE",
  "SET_ANSWER_IMAGE" = "SET_ANSWER_IMAGE",
  "CLEAR_QUESTION" = "CLEAR_QUESTION",
  "SET_PLAYED_QUESTIONS" = "SET_PLAYED_QUESTIONS",
  "SET_ANSWERED_QUESTIONS" = "SET_ANSWERED_QUESTIONS",
  "SET_HINT_QUESTIONS"="SET_HINT_QUESTIONS",
  "SET_MISSED_QUESTIONS" = "SET_MISSED_QUESTIONS",
  "SET_MISSED_TOTAL_QUESTIONS"="SET_MISSED_TOTAL_QUESTIONS",
  "SET_GET_TOTAL_QUESTIONS"="SET_GET_TOTAL_QUESTIONS",
  "SET_EMPTY_MISSED_TOTAL_QUESTIONS"="SET_EMPTY_MISSED_TOTAL_QUESTIONS",
  "SET_EMPTY_GET_TOTAL_QUESTIONS"="SET_EMPTY_GET_TOTAL_QUESTIONS",
  "SET_TOTAL_TIME"="SET_TOTAL_TIME",
  "SET_TAKEN_TIME"="SET_TAKEN_TIME"
}

type SetQuestion = {
  type: typeof QuestionActions.SET_QUESTION;
  payload: Question | null;
};

type GetQuestion={
  type:typeof QuestionActions.GET_QUESTION;
  payload:Question[] | null;
};

type SetAnswer = {
  type: typeof QuestionActions.SET_ANSWER;
  payload: string;
};

type SetAnswerPosition = {
  type: typeof QuestionActions.SET_ANSWER_POSITION;
  payload: number[][];
};

type SetQuestionPosition = {
  type: typeof QuestionActions.SET_QUESTION_POSITION;
  payload: number[][];
};

type SetQuestionImage = {
  type: typeof QuestionActions.SET_QUESTION_IMAGE;
  payload: string;
};

type SetAnswerImage = {
  type: typeof QuestionActions.SET_ANSWER_IMAGE;
  payload: string;
};

type ClearQuestion = {
  type: typeof QuestionActions.CLEAR_QUESTION;
};

type SetPlayedQuestions = {
  type: typeof QuestionActions.SET_PLAYED_QUESTIONS;
  payload: Question[];
};

type SetAnsweredQuestions = {
  type: typeof QuestionActions.SET_ANSWERED_QUESTIONS;
  payload: Question[];
};

type SetHintQuestions={
  type:typeof QuestionActions.SET_HINT_QUESTIONS;
  payload:Question[];
}

type SetMissedQuestions = {
  type: typeof QuestionActions.SET_MISSED_QUESTIONS;
  payload: Question[];
};
type SetTotalTime={type:typeof QuestionActions.SET_TOTAL_TIME;payload:number}

type SetTakenTime={type:typeof QuestionActions.SET_TAKEN_TIME;payload:number}

type SetMissedTotalQuestions={
 type:typeof QuestionActions.SET_MISSED_TOTAL_QUESTIONS;
 payload:Question[];
}
type SetGetTotalQuestions={
  type:typeof QuestionActions.SET_GET_TOTAL_QUESTIONS;
  payload:Question[];
}
type SetemptyMissedTotalQuestions={
  type:typeof QuestionActions.SET_EMPTY_MISSED_TOTAL_QUESTIONS;
  payload:Question[]
}

type setemptyGetTotalQuestions={
  type:typeof QuestionActions.SET_EMPTY_GET_TOTAL_QUESTIONS;
  payload:Question[]
}

type QuestionActionsType =
  | SetQuestion
  |GetQuestion
  | SetAnswer
  | SetAnswerPosition
  | SetQuestionPosition
  | SetQuestionImage
  | SetAnswerImage
  | ClearQuestion
  | SetPlayedQuestions
  | SetAnsweredQuestions
  |SetHintQuestions
  | SetMissedQuestions
  |SetMissedTotalQuestions
  |SetemptyMissedTotalQuestions
  |setemptyGetTotalQuestions
  |SetGetTotalQuestions
  | SetAnswerImage
  |SetTotalTime
  |SetTakenTime
  | ClearQuestion;

export type QuestionState = {
  question: Question | null;
  getquestion:Question[] | null;
  playedQuestions: Question[];
  answer: string;
  answeredQuestions: Question[];
  hintQuestions:Question[];
  missedQuestions: Question[];
   missedTotalquestionget:Question[],
   getTotalquestion:Question[],
  questionPosition: number[][];
  answerPosition: number[][];
  questionImage: string;
  answerImage: string;
  totaltime:number;
  takentime:number;
};

export const QuestionContext = createContext<{
  state: QuestionState;
  dispatch: React.Dispatch<QuestionActionsType>;
}>({
  state: {
    question: null,
    getquestion:null,
    playedQuestions: [],
    answeredQuestions: [],
    hintQuestions:[],
    missedQuestions: [],
     missedTotalquestionget:[],
     getTotalquestion:[],
    answer: "",
    questionPosition: [],
    answerPosition: [],
    questionImage: "",
    answerImage: "",
    totaltime:null,
    takentime:null
  },
  dispatch: () => null,
});

const questionReducer = (
  state: QuestionState,
  action: QuestionActionsType
): QuestionState => {
  switch (action.type) {
    case QuestionActions.SET_QUESTION:
      console.log(action.payload);
      return {
        ...state,
        question: action.payload,
        playedQuestions: [
          ...(state.playedQuestions || []),
          action.payload as Question,
        ],
      };
      case QuestionActions.GET_QUESTION:
        return{...state,getquestion: action.payload}
    case QuestionActions.SET_ANSWER:
      return { ...state, answer: action.payload };
    case QuestionActions.SET_ANSWER_POSITION:
      return { ...state, answerPosition: action.payload };
    case QuestionActions.SET_QUESTION_POSITION:
      return { ...state, questionPosition: action.payload };
    case QuestionActions.SET_QUESTION_IMAGE:
      return { ...state, questionImage: action.payload };
    case QuestionActions.SET_ANSWER_IMAGE:
      return { ...state, answerImage: action.payload };
    case QuestionActions.SET_PLAYED_QUESTIONS:
      return { ...state, playedQuestions: action.payload };
    case QuestionActions.SET_ANSWERED_QUESTIONS:
      return { ...state, answeredQuestions: action.payload };
      case QuestionActions.SET_HINT_QUESTIONS:
        return{...state,hintQuestions:action.payload};
    case QuestionActions.SET_MISSED_QUESTIONS:
      
      return { ...state, missedQuestions: action.payload };
    case QuestionActions.SET_MISSED_TOTAL_QUESTIONS:
     
      return {...state,missedTotalquestionget:state.missedTotalquestionget.concat(action.payload)}
    
       case QuestionActions.SET_EMPTY_MISSED_TOTAL_QUESTIONS:
        return{...state,missedTotalquestionget:action.payload}
      

      case QuestionActions.SET_GET_TOTAL_QUESTIONS:

        return{...state,getTotalquestion:state.getTotalquestion.concat(action.payload)}

        case QuestionActions.SET_EMPTY_GET_TOTAL_QUESTIONS:
          return{...state,getTotalquestion:action.payload}

          case QuestionActions.SET_TOTAL_TIME:
            return{...state,totaltime:action.payload}

            case QuestionActions.SET_TAKEN_TIME:
              return {...state,takentime:action.payload}

    case QuestionActions.CLEAR_QUESTION:
      return {
        question: null,
        getquestion:null,
        answer: "",
        playedQuestions: [],
        answeredQuestions: [],
        hintQuestions:[],
        missedQuestions: [],
         missedTotalquestionget:[],
         getTotalquestion:[],
        questionPosition: [],
        answerPosition: [],
        questionImage: "",
        answerImage: "",
        totaltime:null,
        takentime:null
      };
    default:
      return state;
  }
};


export const QuestionProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(questionReducer, {
    question: null,
    getquestion:null,
    answer: "",
    playedQuestions: [],
    answeredQuestions: [],
    hintQuestions:[],
    missedQuestions: [],
    missedTotalquestionget:[],
    getTotalquestion:[],
    questionPosition: [],
    answerPosition: [],
    questionImage: "",
    answerImage: "",
    totaltime:null,
    takentime:null
  });


  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};
