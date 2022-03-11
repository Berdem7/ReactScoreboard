import React from "react";

function Header(props){
    return (
    <header>
        <h1>{props.title}</h1>
        <span className="stats">Total Players: {props.totalPlayers}</span>
    </header>)
  }

export default Header