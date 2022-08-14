import { Link } from "react-router-dom";
import { TeamItem } from "../App";

export function Header() {
    return (
        <header className="livescore-header">
            <Link to="/teams">
            <img src="/premier-league.svg" alt="Premier League" width={200} />
            </Link>
            <div className="livescore-header-nav">
                <Link className="link" to="/teams">Teams</Link>
                <Link className="link" to="/table">Table</Link>
                <Link className="link" to="/favourites">Favourite Teams</Link>
            </div>
        </header>
    );
}


