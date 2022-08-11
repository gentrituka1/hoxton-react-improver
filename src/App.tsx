import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Teams } from "./pages/Teams";
import { Table } from "./pages/Table";
import { useState } from "react";

export type TeamItem = {
  points: any;
  teamPoints: any;
  teamName: string;
  teamCode: string;
  teamLogo: string;
  teamFounded: number;
  teamPlayed: number;
  teamWon: number;
  teamDrawn: number;
  teamLost: number;
  id: number;
};

function App() {

  const [teams, setTeams] = useState<TeamItem[]>([])

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/teams" />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="*" element={<div>404</div>} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
