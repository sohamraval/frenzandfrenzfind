import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { GameOverModal } from "../components/GameOver.modal";
import LevelHeader from "../components/LevelHeader";
import { LevelQuestions } from "../components/LevelQuestions/LevelQuestions";
import { TwitterModal } from "../components/TwitterModal";
import { WelcomeGuide } from "../components/WelcomeGuide";
import { CorrectAnswerModal } from "../components/common/CorrectAnswer.modal";
import { WrongAnswerModal } from "../components/common/WrongAnswer.modal";
import { levels } from "../constants/levels";
import { GameActions, GameContext } from "../context/gameContext";
import { QuestionActions, QuestionContext } from "../context/questionsContext";
import { shuffle } from "../helpers/shuffle";
import Level from "../interfaces/Level.interface";

const LevelWrapper = () => {
  const { level } = useParams<{ level: string }>();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(GameContext);
  const questionContext = useContext(QuestionContext);
  const imgRef = React.createRef<HTMLImageElement>();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [showWelcomeGuide, setWelcomeGuide] = useState(true);
  const[twiiterModal,SetTwiiterModal]=useState<Boolean>(false);
  const[showTime,setShowTime]=useState<Boolean>(false);
  const[showleveltwo,setLeveltwo]=useState<Boolean>(false);
  const [levelData, setLevelData] = useState<Level | undefined>(undefined);
  const handleAttachEventListener = (e: any) => {
    console.log("state",state)
    console.log("e",e)
    setShowTime(true)
    const { width, height } = e.target.getBoundingClientRect();
    //width and height of target element
    const { offsetX, offsetY } = e.nativeEvent;
    setX(Math.round((((offsetX / width) * 100 - 10) / 80) * 100));
    setY(Math.round((((offsetY / height) * 100 - 5) / 90) * 53.3));
    const _x = Math.round((((offsetX / width) * 100 - 10) / 80) * 100);
    const _y = Math.round((((offsetY / height) * 100 - 5) / 90) * 53.3);
    //  const _x = -1000;
    // const _y = -1000;
    const positions = state.question?.answer.answerPositions || [];
    let highestX = -1000;
    let highestY = -1000;
    let lowestX = 1000;
    let lowestY = 1000;
    //    let highestX = -1000;
    // let highestY = -1000;
    // let lowestX = -1000;
    // let lowestY = -1000;

    for (let i = 0; i < positions.length; i++) {
      if (positions[i][0] >= highestX) {
        debugger
        highestX = positions[i][0];
        // highestX = -1000;
      } else if (positions[i][0] <= lowestX) {
        lowestX = positions[i][0];
        // lowestX = -1000;
      }
      if (positions[i][1] >= highestY) {
        highestY = positions[i][1];
        // highestY = -1000;
      } else if (positions[i][1] <= lowestY) {
        lowestY = positions[i][1];
        //  lowestY = -1000;
      }
    }
    let correct = false;
    if (_x < highestX && _y < highestY && _x > lowestX && _y > lowestY) {
      // if (_x == highestX && _y == highestY && _x == lowestX && _y == lowestY) {
      correct = true;
    } else {
      correct = false;
    }
    if (correct) {
      dispatch({ type: GameActions.TOGGLE_CORRECT });
      questionContext.dispatch({
        type: QuestionActions.SET_ANSWERED_QUESTIONS,
        payload: state.question,
      });
      questionContext.dispatch({
        type: QuestionActions.SET_GET_TOTAL_QUESTIONS,
        payload: state.question.text,
      });

      state.score += 500;
    } 
    else {
      dispatch({ type: GameActions.TOGGLE_WRONG });
      
      questionContext.dispatch({
        type: QuestionActions.SET_MISSED_QUESTIONS,
        payload: state.question,
      });
      questionContext.dispatch({
        type: QuestionActions.SET_MISSED_TOTAL_QUESTIONS,
        payload: state.question.text,
      });
     state.score -= 100;

      // if (state.score > 0) {
      //   state.score -= 100;
      // }
    }

    const filteredQuestions = levelData?.questions.filter(
      (_question) => _question.text !== questionContext.state.question.text
    );

    if (filteredQuestions?.length === 0) {
      if (
        questionContext.state.missedTotalquestionget.length ==
        questionContext.state.getquestion.length - 1
      ) {
        // navigate(`/level/${state.level}`);
      } else {
        //  <Levelone onClose={() => setLeveltwo(!showleveltwo)}/>;
        if(state.level < 2 )
        {
          setLeveltwo(true);
          SetTwiiterModal(true);
        }
                dispatch({ type: GameActions.SET_LEVEL, payload: state.level });
                navigate(`/level/${state.level }`);
      }
    }
          
    setLevelData((prev) => {
      return {
        ...prev,
        questions: filteredQuestions || [],
      };
    });
   
    questionContext.dispatch({
      type: QuestionActions.SET_QUESTION,
      payload: filteredQuestions?.[0] || null,
    });
  };
  const removeQuestion = () => {
    const filteredQuestions = levelData?.questions.filter(
      (_question) => _question.text !== questionContext.state.question.text
    );
    if (filteredQuestions?.length === 0) {
      if (
        questionContext.state.missedTotalquestionget.length ==
        questionContext.state.getquestion.length - 1
      ) {
        // navigate(`/level/${state.level}`);
      } else {
        
        //  <Levelone onClose={() => setLeveltwo(!showleveltwo)}/>;
        if(state.level < 2 )
        {
          setLeveltwo(true);
        }
                dispatch({ type: GameActions.SET_LEVEL, payload: state.level + 1 });
                navigate(`/level/${state.level + 1}`);
      }
    }
          
    setLevelData((prev) => {
      return {
        ...prev,
        questions: filteredQuestions || [],
      };
    });
    questionContext.dispatch({
      type: QuestionActions.SET_QUESTION,
      payload:filteredQuestions?.[0] || null,
    });
  }
  useEffect(() => {
    const _levelData: Level | undefined = levels.find(
      (_level) => _level.level === state.level
    );
    if (!_levelData) {
      dispatch({ type: GameActions.EXIT_GAME });
      window.location.href = "/";
    }
    setLevelData(_levelData);
    questionContext.dispatch({
      type: QuestionActions.SET_QUESTION,
      payload: _levelData.questions[0],
    });
    questionContext.dispatch({
      type: QuestionActions.SET_ANSWER,
      payload: questionContext.state.question?.answer.text || "",
    });
    console.log(questionContext.state);
     
    if (_levelData) {
      questionContext.dispatch({
        type: QuestionActions.GET_QUESTION,
        payload: _levelData.questions ? _levelData.questions : [],
      });
    }
    navigate(`/level/${state.level}`);
  }, [state.level]);
  // TODO: this should come from the server
  const levelBackgroundImage = levelData?.backgroundImage.src || "";
  console.log("questionContext.state", questionContext.state);
  console.log(showleveltwo,"level")
  return (
    <div className="relative bg-contain bg-no-repeat bg-top w-dvw h-dvh m-0 p-0 box-border ">

      <img
        src={levelBackgroundImage}
        alt=""
        className="object-cover absolute top-0 left-0 w-full h-full z-0"
        onClick={(e: any) => handleAttachEventListener(e)}
        useMap="#image-map"
        loading="eager"
        ref={imgRef}
      />
      <LevelHeader SetTwiiterModal={SetTwiiterModal} twiiterModal={twiiterModal} removeQuestion ={removeQuestion} setShowTime={setShowTime} showTime={showTime} />
      <Outlet />
      {/* <GameOverModal /> */}
      {questionContext.state.getquestion &&
        questionContext.state.missedTotalquestionget &&
        questionContext.state.missedTotalquestionget.length >
          questionContext.state.getquestion.length - 1 && <GameOverModal />}

      <WrongAnswerModal />
      <CorrectAnswerModal />
      {state.level === 1 && showWelcomeGuide && (
        <WelcomeGuide onClose={() => setWelcomeGuide(!showWelcomeGuide)} />
      )}
      {(showleveltwo) && (
        <TwitterModal onClose={() => setLeveltwo(!showleveltwo)}  />
      ) }
      <LevelQuestions questions={shuffle(levelData?.questions || [])} />
    </div>
  );
};

export default LevelWrapper;
