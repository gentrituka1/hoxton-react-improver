import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { TeamItem } from "../App";
import {AiOutlineStar, AiFillStar} from "react-icons/ai";


export function TeamsDetails () {

    const [team, setTeam] = useState<TeamItem | null>(null);

    let params = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/PremierLeagueTeams/${params.id}`)
          .then((res) => res.json())
          .then((teamsFromServer) => {
            setTeam(teamsFromServer);
          });
      }
    , [])

    function toggleFavourite() {
        fetch(`http://localhost:4000/PremierLeagueTeams/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                favourite: !team?.favourite
            })
        }).then(r => r.json())
            .then(team => setTeam(team))
    }

    if(team === null) return <div className="loading">Loading...</div>

    if(team.id === undefined) return <Navigate to="/teams" />
    
    return (
        <>
            <div className="the-team">
                <div className="the-team-details">
                    <header className="team-details__header">{team.name} Football Club</header>
                    <main> 
                        <div className="team-details__image">
                            <img src={team.logo} alt={team.code} width={100} />
                        </div>
                        <div className="team-details__info">
                            <div className="team-info-item"><span className="grey">FULL NAME:</span><span className="bold-grey">{team.name}</span></div>
                            <div className="team-info-item"><span className="grey">CODE:</span><span className="bold-grey">{team.code}</span></div>
                            <div className="team-info-item"><span className="grey">FOUNDED:</span><span className="bold-grey">{team.founded}</span></div>
                            <div className="team-info-item"><span className="grey">GROUND:</span><span className="bold-grey">{team.stadium}</span></div>
                            <div className="team-info-item"><span className="grey">GROUND CAPACITY:</span><span className="bold-grey">{team.stadiumCapacity} seats</span></div>
                        </div>
                        <div className="team-details__favourite">
                            {team.favourite ? <AiFillStar onClick={() => 
                                toggleFavourite()
                             } className="favourite-active" /> : <AiOutlineStar onClick={() => 
                                toggleFavourite()
                             } className="favourite" />}
                        </div>
                    </main>
                 </div>
            </div>
        </>
    )

}