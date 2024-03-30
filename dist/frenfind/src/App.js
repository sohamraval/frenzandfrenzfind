"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Layout_1 = __importDefault(require("./Layouts/Layout"));
const LevelWrapper_1 = __importDefault(require("./Layouts/LevelWrapper"));
const LoadingAssets_1 = __importDefault(require("./components/LoadingAssets"));
const NotFound_1 = require("./components/NotFound");
const gameContext_1 = require("./context/gameContext");
const soundContext_1 = require("./context/soundContext");
const GameFinished_1 = require("./pages/GameFinished");
const HomePage_1 = __importDefault(require("./pages/HomePage"));
const LeaderBoard_1 = __importDefault(require("./pages/LeaderBoard"));
const LevelOne_1 = __importDefault(require("./pages/LevelOne"));
const LevelThree_1 = __importDefault(require("./pages/LevelThree"));
const LevelTwo_1 = __importDefault(require("./pages/LevelTwo"));
function App() {
    const { state, dispatch } = (0, react_1.useContext)(gameContext_1.GameContext);
    const soundContext = (0, react_1.useContext)(soundContext_1.SoundContext);
    const location = window.location;
    (0, react_1.useEffect)(() => {
        dispatch({ type: gameContext_1.GameActions.INIT_GAME });
        // dispatch({ type: GameActions.SET_LEVEL, payload: 1 });
        // if (location.pathname.includes("level")) {
        //   soundContext?.dispatch({ type: SoundActions.MUSIC_ON });
        // } else {
        //   soundContext?.dispatch({ type: SoundActions.MUSIC_OFF });
        // }
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
    return (<react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Routes>
        {!state.isGameInitialized && (<react_router_dom_1.Route path="" element={<LoadingAssets_1.default />}/>)}
        {state.isGameInitialized && (<react_router_dom_1.Route path="" element={<Layout_1.default />}>
            <react_router_dom_1.Route path="/" index element={<HomePage_1.default />}/>
            <react_router_dom_1.Route path="leaderboard" element={<LeaderBoard_1.default />}/>
            <react_router_dom_1.Route path="game-finished" element={<GameFinished_1.GameFinished />}/>
            <react_router_dom_1.Route path="level/:level" element={<LevelWrapper_1.default />}>
              <react_router_dom_1.Route path="level/1" element={<LevelOne_1.default />}/>
              <react_router_dom_1.Route path="level/2" element={<LevelTwo_1.default />}/>
              <react_router_dom_1.Route path="level/3" element={<LevelThree_1.default />}/>
              <react_router_dom_1.Route path="level/*" element={<NotFound_1.NotFound />}/>
            </react_router_dom_1.Route>
          </react_router_dom_1.Route>)}
        
        {/* <Route path="/test" index element={<button style={{backgroundColor:"red", width: "50wv", height: "20vh"}} onClick={logintweeter} > HHHHH </button>} /> */}

        <react_router_dom_1.Route path="*" element={<NotFound_1.NotFound />}/>
        
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
//# sourceMappingURL=App.js.map