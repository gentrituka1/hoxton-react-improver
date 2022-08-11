import { useEffect, useState } from "react";
import { TeamItem } from "../App";

export function Table(){

    const [teams, setTeams] = useState<TeamItem[]>([])

    useEffect(() => {
        fetch(`http://localhost:4000/PremierLeagueTeams`)
          .then((res) => res.json())
          .then((teamsFromServer) => {
            setTeams(teamsFromServer);
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
                    <div className="team-name">
                        <img src={team.teamLogo} alt={team.teamCode} width={60}/>
                        <span>{team.teamName}</span>
                    </div>
                    <div className="points-bar">
                        <span>{team.teamPlayed}</span>
                        <span>{team.teamWon}</span>
                        <span>{team.teamDrawn}</span>
                        <span>{team.teamLost}</span>
                        <span>{(team.teamWon * 3) + (team.teamDrawn * 1)}</span>
                    </div>
                </div>
                </>
            ))}
        </div>
    </>

    );

}


