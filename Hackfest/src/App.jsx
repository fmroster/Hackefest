import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Homepage/Home";
import NewsUpdates from "../Components/NewsUpdate/NewsUpdate"
import Fixture from "../Components/Fixtures/Fixtures"
import Leaderboard from "../Components/LeadersBoard/LeaderBoard"
import Tournament from '../'
import RegisterTournament from "./Tournament/Tournament"

const App = () => {
  return 
        (
                  <Router>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/tournament" element={<Tournament />} />
                        <Route path="/newsupdates" element={<NewsUpdates />} />
                        <Route path="/fixtures" element={<Fixture />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                        <Route path="/registertournament" element={<RegisterTournament />} />
                    </Routes>
                </Router>
          )
;
};

export default App;