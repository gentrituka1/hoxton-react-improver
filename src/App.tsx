import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Teams } from "./pages/Teams";
import { Table } from "./pages/Table";
import { useState } from "react";
import { TeamsDetails } from "./pages/TeamsDetails";

export type TeamItem = {
  name: string;
  code: string;
  logo: string;
  founded: number;
  stadium: string;
  stadiumCapacity: number;
  tableStand: {
    played: number;
    won: number;
    drawn: number;
    lost: number;
    points: number;
  };
  id: number;
};

function App() {
  const [teams, setTeams] = useState<TeamItem[]>([]);

  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route index element={<Navigate to="/teams" />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:id" element={<TeamsDetails />} />
          <Route path="*" element={<div>404</div>} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
