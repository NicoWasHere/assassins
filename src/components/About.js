import React from "react"
import styles from "./About.module.css"


function About() {
    return (
        <div className = {styles.container}> 
            <p className = {styles.blurb}>Welcome.</p>
            <p className = {styles.blurb}>You are currently on the official website for the 2021 version of Lexington Assassins. 
            For those that are unfamiliar with the game, Assassins is an age old senior tradition, experienced by generations of past LHS students. 
            Each player is assigned a target, and has an assassin assigned to them. 
            Players are eliminated, or "killed" by being doused in any amount of pure water by their assassin. 
            The goal of the game is survival, and while it may seem like a melee of every-person-for-themself, alliances will be made, tactics will be tested and the cunning will conquer.
            </p>
            <p className = {styles.blurb}>
            The game and this website are open to LHS Seniors of the Class of 2021.
            We begin at midnight on April 26th.
            Targets will be assigned randomly through an online generator. 
            </p>
            <p className = {styles.blurb}>
            Good luck and have fun.
            </p>
            <p className = {styles.blurb}>
            - Ben, Abby, Kyuho, and Nico
        </p>

        </div>
    )
}

export default About