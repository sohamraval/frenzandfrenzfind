import { FC, createRef, useContext, useEffect, useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GameActions, GameContext } from "../../context/gameContext";
import {
  QuestionContext
} from "../../context/questionsContext";
import Question from "../../interfaces/Question.interface";
import { HintModal } from "./Hint.modal";

interface LevelQuestionsProps {
  questions: Question[];
}

export const LevelQuestions: FC<LevelQuestionsProps> = ({ questions }) => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);
  const showQuestionRef = createRef<HTMLDivElement>();
  const questionContext = useContext(QuestionContext);
    const { state, dispatch } = useContext(GameContext);
    const[nextQuestion,setNextQuestion]=useState<boolean>(true);

  useEffect(() => {
  
    setQuestion(questions[questionIndex]);
    dispatch({
      type: GameActions.SET_QUESTION,
      payload: questions[questionIndex] as any,
    });
        setNextQuestion(true)
        setShowHint(false)
        // nextQues=true;
  }, [questionIndex, questions]);
    

   useEffect(() => {
     if (nextQuestion && showHint) {
      state.score -= 50;
      setNextQuestion(false)
    } 
   }, [showHint]);



  return (
    <div
      className="group bg-white/70  aspect-square hover:rounded-none w-dvw px-10 py-5 absolute bottom-0 right-0 h-[80px] "
      ref={showQuestionRef}
    >
      <div className="justify-between items-center flex">
        <p className="lg:text-2xl text-base font-extrabold">
         {questionContext.state.question?.text}
        </p>
        <div className="space-x-5">
          <div className="relative">
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-4xl hover:text-yellow-500 hover:scale-105 transition-all"
            >
              <HiOutlineLightBulb />
            </button>
            {showHint && <HintModal hint={question?.hint || ""} />}
          </div>
        </div>
      </div>
    </div>
  );
};
