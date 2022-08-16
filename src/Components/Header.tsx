import { useState } from "react";
import { Link } from "react-router-dom";
import { TeamItem } from "../App";

function createNav (){

    // event.currentTarget.disabled = true;

    // let link = document.querySelector(".teams-link")

    // let navItems = document.createElement("div");
    // navItems.className = "livescore-header-nav__div";

    // let navList = document.createElement("ul");
    // navList.className = "livescore-header-nav__list";

    // let navItem1 = document.createElement("li");
    // navItem1.className = "livescore-header-nav__item";
    // navItem1.innerHTML = "<h3>Premier League</h3>";

    // let navItem2 = document.createElement("li");
    // navItem2.className = "livescore-header-nav__item";
    // navItem2.innerHTML = "<h3>La Liga</h3>";

    // let navItem3 = document.createElement("li");
    // navItem3.className = "livescore-header-nav__item";
    // navItem3.innerHTML = "<h3>Bundesliga</h3>";

    // let navItem4 = document.createElement("li");
    // navItem4.className = "livescore-header-nav__item";
    // navItem4.innerHTML = "<h3>Ligue 1</h3>";

    // let navItem5 = document.createElement("li");
    // navItem5.className = "livescore-header-nav__item";
    // navItem5.innerHTML = "<h3>Serie A</h3>";

    // navList.append(navItem1, navItem2, navItem3, navItem4, navItem5);
    // navItems.append(navList);
    // link?.append(navItems);
    
}


export function Header() {

   
    return (
        <header className="livescore-header">
            <Link to="/teams">
            <img src="/premier-league.svg" alt="Premier League" width={200} />
            </Link>
            <div className="livescore-header-nav">
                <Link className="link teams-link" to="/teams" onDoubleClick={createNav}>
                        Teams</Link>
                <Link className="link" to="/table">Table</Link>
                <Link className="link" to="/favourites">Favourite Teams</Link>
            </div>
        </header>
    );
}


