import { FC, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import na from "../assets/images/na.png";
import oscoret from "../assets/images/oscoret.png";
import titleq from "../assets/images/titleq.png";
import Nav from "../components/Navbar";
import { GameActions, GameContext } from "../context/gameContext";
import { QuestionActions, QuestionContext } from "../context/questionsContext";
import { SoundActions, SoundContext } from "../context/soundContext";


const HomePage: FC = () => {
  const navigate = useNavigate();
  // const { dispatch } = useContext(GameContext);
  const soundContext = useContext(SoundContext);
  const { state, dispatch } = useContext(GameContext);
  const questionContext = useContext(QuestionContext);

  const handleStartGame = () => {
    dispatch({ type: GameActions.START_GAME });

    // questionContext.dispatch({type:QuestionActions.SET_MISSED_TOTAL_QUESTIONS,payload: []})
    //   questionContext.dispatch({type:QuestionActions.SET_GET_TOTAL_QUESTIONS,payload: []})
    questionContext.dispatch({
      type: QuestionActions.SET_EMPTY_MISSED_TOTAL_QUESTIONS,
      payload: [],
    });
    questionContext.dispatch({
      type: QuestionActions.SET_EMPTY_GET_TOTAL_QUESTIONS,
      payload: [],
    });

    soundContext?.dispatch({ type: SoundActions.MUSIC_ON });
    navigate("/level/1");
  };

  return (
    <div className="">
      

            <span className="justify-content-space-evenly">
            <Nav activeTab={null}/>
            </span>
            <div className="mb-3">
          
      <img src={oscoret} className="absolute top-20 left-5" />
      <img src={na} className="absolute top-13 left-40" />
      <Link
        to="/leaderboard"
        className="absolute cursor-pointer top-24 left-1/2 -translate-x-1/2 uppercase bg-white shadow-inner rounded-2xl py-1 px-5 hover:scale-[1.02] transition-all text-xl font-bold"
      >
        leaderBoard
      </Link>
      <img
        src={titleq}
        className="absolute top-[75%] left-1/2 -translate-x-1/2  "
      />
      <button
        className="absolute cursor-pointer top-[82%] left-1/2 -translate-x-1/2  uppercase bg-white shadow-inner rounded-2xl py-1 px-5 hover:scale-[1.02] transition-all text-xl font-bold"
        onClick={() => handleStartGame()}
      >
        Connect via Twitter
      </button>
      <div className="flex gap-2 absolute bottom-10 text-white font-bold text-xl right-10">
        <a className="hover:text-teal-200">About</a>
        <span>|</span>
        <a className="hover:text-teal-200">Privacy</a>
      </div>

      </div>
    </div>
  );
};

export default HomePage;
