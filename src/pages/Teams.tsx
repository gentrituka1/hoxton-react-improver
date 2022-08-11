import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
              <Link to="/teamsdetails/:id">
                <li>
                  <img src={team.logo} alt={team.code} />
                  <p>{team.name}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
    )
}