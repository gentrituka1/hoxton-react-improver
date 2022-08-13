import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TeamItem } from "../App";
import {FcSearch} from "react-icons/fc";

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
        <>
        <form className="livescore-header-search" onSubmit={(event) => {
            event.preventDefault();
            let searchValue = document.getElementById("search")?.value;
            let filteredTeams = teams.filter(team => team.name.toLowerCase().includes(searchValue.toLowerCase()));
            if(searchValue === ""){
              location.reload();
            } else {
              setTeams(filteredTeams);
            }
              
            }}>
              <div className="livescore-header-search-input">
                <div className="livescore-header-search-input-logo">
                  <FcSearch className="search-icon" />
                  <input type="text" id="search" name="search" placeholder="Search teams..." />
                </div>
              </div>
          </form>
        <div className="livescore-main">
          <ul className="livescore-main__list">
            {teams.map((team) => (
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