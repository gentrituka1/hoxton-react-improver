import { Link } from "react-router-dom";
import { TeamItem } from "../App";

type Props = {
    teams: TeamItem[];
    setTeams: (teams: TeamItem[]) => void;
}

export function Header({ teams, setTeams }: Props) {
    return (
        <header className="livescore-header">
            <Link to="/teams">
            <img src="/premier-league.svg" alt="Premier League" width={200} />
            </Link>
            <div className="livescore-header-nav">
                <Link className="link" to="/teams">Teams</Link>
                <Link className="link" to="/table">Table</Link>
            </div>
        </header>
    );
}


