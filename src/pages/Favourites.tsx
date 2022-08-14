import { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { TeamItem } from "../App";



export function Favourites () {
    const [favouriteTeams, setFavouriteTeams] = useState<TeamItem[]>([]);

    useEffect(() => {
        fetch(`http://localhost:4000/PremierLeagueTeams?favourite=true`)
            .then((res) => res.json())
            .then((teamsFromServer) => {
                setFavouriteTeams(teamsFromServer);
            })
    }, [])

    return (
        <>
        

        <div className="livescore-main">
        <ul className="livescore-main__list">
          {favouriteTeams.map((team) => (
            <Link to={`/teams/${team.id}`}>
              <li>
                <img src={team.logo} alt={team.code} />
                <p>{team.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
        </>
    )
}