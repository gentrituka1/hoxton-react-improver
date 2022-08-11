import { Link } from "react-router-dom";

export function Header(){
    return (
        <header className="livescore-header">
            <Link to="/teams">
            <img src="/premier-league.svg" alt="Premier League" width={200} />
            </Link>
            <div className="livescore-header-nav">
                <Link to="/teams">Teams</Link>
                <Link to="/table">Table</Link>
            </div>
        </header>
    );
}