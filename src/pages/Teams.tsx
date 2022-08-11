import { useEffect, useState } from "react";
import { TeamItem } from "../App";

export function Teams () {

    const [teams, setTeams] = useState<TeamItem[]>([])

    useEffect(() => {
        fetch(`http://localhost:4000/PremierLeagueTeams`)
          .then((res) => res.json())
          .then((teamsFromServer) => {
            setTeams(teamsFromServer);
          });
      }, []);

    return (
        <div className="livescore-main">
          <ul className="livescore-main__list">
            {teams.map((team) => (
              <a href={team.teamLink}>
                <li>
                  <img src={team.teamLogo} alt={team.teamCode} />
                  <p>{team.teamName}</p>
                </li>
              </a>
            ))}
          </ul>
        </div>
    )
}