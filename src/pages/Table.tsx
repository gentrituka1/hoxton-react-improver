import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TeamItem } from "../App";

export function Table() {
  const [teams, setTeams] = useState<TeamItem[]>([]);

  function calculatePoints(team: TeamItem): number {
    return team.tableStand.won * 3 + team.tableStand.drawn;
  }

  function addPointsToTeam(team: TeamItem) {
    return {
      ...team,
      tableStand: { ...team.tableStand, points: calculatePoints(team) },
    };
  }

  useEffect(() => {
    fetch(`http://localhost:4000/PremierLeagueTeams`)
      .then((res) => res.json())
      .then((teamsFromServer) => {
        const sortedTeams = teamsFromServer
          .map(addPointsToTeam)
          .sort(
            (a: TeamItem, b: TeamItem) =>
              b.tableStand.points - a.tableStand.points ||
              b.tableStand.won - a.tableStand.won ||
              b.tableStand.drawn - a.tableStand.drawn ||
              a.tableStand.lost - b.tableStand.lost
          );
        setTeams(sortedTeams);
      });
  }, []);

  return (
    <>
      <div className="the-table">
        <div className="one-line">
          <span>#</span>
          <div className="team-name">
            <span>Team</span>
          </div>
          <div className="points-bar">
            <span>P</span>
            <span>W</span>
            <span>D</span>
            <span>L</span>
            <span>PTS</span>
          </div>
        </div>
        {teams.map((team, index) => (
          <>
            <div className="two-line">
              <span>{index + 1}</span>
              <Link to={`/teams/${team.id}`} className="link-table" >
                <div className="team-name">
                  <img src={team.logo} alt={team.code} width={60} />
                  <span>{team.name}</span>
                </div>
              </Link>
              <div className="points-bar">
                <span>{team.tableStand.played}</span>
                <span>{team.tableStand.won}</span>
                <span>{team.tableStand.drawn}</span>
                <span>{team.tableStand.lost}</span>
                <span>{calculatePoints(team)}</span>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
