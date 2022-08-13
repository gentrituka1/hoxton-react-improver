import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { TeamItem } from "../App";
import { FcSearch } from "react-icons/fc";

export function Teams() {
  const [teams, setTeams] = useState<TeamItem[]>([]);
  const [filteredTeams, setFilteredTeams] = useState<TeamItem[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4000/PremierLeagueTeams`)
      .then((res) => res.json())
      .then((teamsFromServer) => {
        setTeams(teamsFromServer);
        setFilteredTeams(teamsFromServer);
      });
  }, []);

  let navigate = useNavigate();

  return (
    <>
      <form
        className="livescore-header-search"
        onChange={(event) => {
          event.preventDefault();
          let searchValue = document.getElementById("search")?.value;
          let filteredTeams = teams.filter((team) =>
            team.name.toLowerCase().includes(searchValue.toLowerCase())
          );
          if (searchValue === "") {
            setFilteredTeams(teams);
          } else {
            setFilteredTeams(filteredTeams);
          }
        }}
      >
        <div className="livescore-header-search-input">
          <div className="livescore-header-search-input-logo">
            <FcSearch className="search-icon" />
            <input type="text" id="search" placeholder="Search teams..." />
          </div>
        </div>
      </form>
      <div className="livescore-main">
        <ul className="livescore-main__list">
          {filteredTeams.map((team) => (
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
  );
}
