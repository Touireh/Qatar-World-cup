import { Link } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Apropos from "./pages/Apropos/Apropos";
import Profile from "./pages/Profile/Profile";
import Hotel from "./pages/Hotel/Hotel";
import Game from "./pages/Game/Game";

import "./styles/global.scss"

function App() {
  const [toggleNav, setToggleNav] = useState(false)

  const handleToggleNav = () => {
    setToggleNav(!toggleNav)
  }

  const colorMode = useSelector(state => state.colorMode.mode)


  return (
    <div className={`App ${colorMode}`}>
      <Sidebar toggler={toggleNav} closeNav={handleToggleNav} />
      <div className="AppContainer">
        <Navbar toggleNav={handleToggleNav} />
        <div className="main">
          <Routes>
            <Route path="/">
              <Route index element={<Home />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/Apropos" element={<Apropos />}></Route>
              <Route path="/Game" element={<Game />}></Route>
              <Route path="/news" element={<News />}></Route>
              <Route path="/Hotel" element={<Hotel />}></Route>
            </Route>
          </Routes>
        </div>
        <div className="footer">

        <p>
            Contact Me: <Link href="" target="_blank" rel="noopener noreferrer"> LinkedIn </Link>
            <Link href="" target="_blank" rel="noopener noreferrer"> Github </Link>
            <Link href="" target="_blank" rel="noopener noreferrer"> Twitter </Link>
        </p>
        <hr/>
            <p>Made With ❤️ By Our Team "SAKINI,TOUIREH,AIT YOUSSEF"</p>
      </div>
      </div>
    </div>
  );
}

export default App;
//          /sport/football/fifa-world-cup/12469077
//   category id:    1468
//      tournament id: 16       
//       season id 41087

