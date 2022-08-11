import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { TeamItem } from "../App";


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

    if(team === null) return <div>Loading...</div>

    if(team.id === undefined) return <Navigate to="/teams" />
    
    return (
        <>
            <div className="the-team">
                <header className="team-details__header">{team.name} Football Club</header>
                <main> 
                    <div className="team-details__image">
                        <img src={team.logo} alt={team.code} width={100} />
                    </div>
                    <div className="team-details__info">
                        <div className="team-into-item"><span className="grey">FULL NAME:</span><span className="bold-grey">{team.name}</span></div>
                        <div className="team-into-item"><span className="grey">CODE:</span><span className="bold-grey">{team.code}</span></div>
                        <div className="team-into-item"><span className="grey">FOUNDED:</span><span className="bold-grey">{team.founded}</span></div>
                        <div className="team-into-item"><span className="grey">GROUND:</span><span className="bold-grey">{team.stadium}</span></div>
                        <div className="team-into-item"><span className="grey">GROUND CAPACITY:</span><span className="bold-grey">{team.stadiumCapacity}</span></div>
                    </div>
                </main>
            </div>
        </>
    )

}