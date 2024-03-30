import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutOutlet from "./Layouts/Layout";
import LevelWrapper from "./Layouts/LevelWrapper";
import LoadingAssets from "./components/LoadingAssets";
import { NotFound } from "./components/NotFound";
import { GameActions, GameContext } from "./context/gameContext";
import { SoundActions, SoundContext } from "./context/soundContext";
import { GameFinished } from "./pages/GameFinished";
import HomePage from "./pages/HomePage";
import LeaderBoard from "./pages/LeaderBoard";
import LevelOne from "./pages/LevelOne";
import LevelThree from "./pages/LevelThree";
import LevelTwo from "./pages/LevelTwo";

function App() {
  const { state, dispatch } = useContext(GameContext);
  const soundContext = useContext(SoundContext);
  const location = window.location;

  useEffect(() => {
    dispatch({ type: GameActions.INIT_GAME });
    dispatch({ type: GameActions.SET_LEVEL, payload: 1 });
    if (location.pathname.includes("level")) {
      soundContext?.dispatch({ type: SoundActions.MUSIC_ON });
    } else {
      soundContext?.dispatch({ type: SoundActions.MUSIC_OFF });
    }
  }, []);

  //  const logintweeter=()=>{
  //   console.log("click")
  //       const encodedCBURI = `http://127.0.0.1:5000/twitter/callback`;
  //   const scope = encodeURIComponent("tweet.read users.read offline.access");
  //   const baseAuthUrl = `${`https://twitter.com/i/oauth2/authorize`}?client_id=${`d1pzQ3pnTnhJME9rZXhrdXUxQUM6MTpjaQ`}&redirect_uri=${encodedCBURI}&response_type=code&scope=${scope}&code_challenge=challenge&code_challenge_method=plain&state=state`;

  //   const ob={
  //       score:""
  //    }
  //    fetch('http://localhost:8000/api/twitter-auth-url', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body:JSON.stringify(ob)
  //   })
  //   .then(response => {
  //       console.log('Response', response);
  //       return response.json();
  //   }).then(data=>{
  //     console.log(data.url)
  //     window.location.href=data.url
  //   })
  //   .catch(error => {
  //       console.error('Error:', error);
  //   });

  // }


  return (
    <BrowserRouter>
      <Routes>
        {!state.isGameInitialized && (
          <Route path="" element={<LoadingAssets />} />
        )}
        {state.isGameInitialized && (
          <Route path="" element={<LayoutOutlet />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="leaderboard" element={<LeaderBoard />} />
            <Route path="game-finished" element={<GameFinished />} />
            <Route path="level/:level" element={<LevelWrapper />}>
              <Route path="level/1" element={<LevelOne />} />
              <Route path="level/2" element={<LevelTwo />} />
              <Route path="level/3" element={<LevelThree />} />
              <Route path="level/*" element={<NotFound />} />
            </Route>
          </Route>
        )}
        
        {/* <Route path="/test" index element={<button style={{backgroundColor:"red", width: "50wv", height: "20vh"}} onClick={logintweeter} > HHHHH </button>} /> */}

        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
