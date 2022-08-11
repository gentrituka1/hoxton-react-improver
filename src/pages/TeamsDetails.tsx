import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TeamItem } from "../App";

type Props = {
    team: TeamItem;
    setTeams: (teams: TeamItem[]) => void;
}

export function TeamsDetails ({team, setTeams} : Props) {

    let params = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/PremierLeagueTeams/${params.id}`)
          .then((res) => res.json())
          .then((teamsFromServer) => {
            setTeams(teamsFromServer);
          });
      }
    , [])
    
    return (
        <>
            <header>{team.name} Football Club</header>
            <main> 
                <div className="team-image">
                    <img src={team.logo} alt={team.code} />
                </div>
                <div className="team-info">
                    <div className="team-into-item"><span className="grey">FULL NAME</span><span>{team.name}</span></div>
                    <div className="team-into-item"><span className="grey">CODE:</span><span>{team.code}</span></div>
                    <div className="team-into-item"><span className="grey">FOUNDED</span><span>{team.founded}</span></div>
                    
                </div>
            </main>
        </>
    )

}