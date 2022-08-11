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
            <header>{team.teamName} Football Club</header>
            <main> 
                <div className="team-image">
                    <img src={team.teamLogo} alt={team.teamCode} />
                </div>
                <div className="team-info">
                    <div className="team-into-item"><span className="grey">FULL NAME</span><span>{team.teamName}</span></div>
                    <div className="team-into-item"><span className="grey">CODE:</span><span>{team.teamCode}</span></div>
                    <div className="team-into-item"><span className="grey">FOUNDED</span><span>{team.teamFounded}</span></div>
                    {team.}
                </div>
            </main>
        </>
    )

}