import { Link } from "react-router-dom";
import { TeamItem } from "../App";

export function Header() {
    return (
        <header className="livescore-header">
            <Link to="/teams">
            <img src="/premier-league.svg" alt="Premier League" width={200} />
            </Link>
            <div className="livescore-header-nav">
                <Link className="link" to="/teams" onClick={() => {
                    return(
                        <div className="livescore-header-nav__item">
                            <ul>
                                <li><h3>Premier League</h3></li>
                                <li><h3>La Liga</h3></li>
                                <li><h3>Bundesliga</h3></li>
                                <li><h3>Ligue 1</h3></li>
                                <li><h3>Serie A</h3></li>
                            </ul>
                        </div>
                    )
                }}>Teams</Link>
                <Link className="link" to="/table">Table</Link>
                <Link className="link" to="/favourites">Favourite Teams</Link>
            </div>
        </header>
    );
}


