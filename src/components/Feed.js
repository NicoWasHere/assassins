import React, { useState } from "react"
import styles from "./Highlights.module.css"

import killIcon from "../img/killIcon.png"


function Feed() {
    
    //eventually populated with real data
    // const [events,setEvents] = useState(["nicp","ben","Andrew Stevens","Julie Hackett","Big Mans Christian B","Aansh Jha","Doctor Suess","Big Mans","Linda Kebechi","Kyu Kyu Kyu","Turkey Terrific","Abbeeee Sumpers"])
    const [events,setEvents] = useState([])
    fetch('https://friede.gg/api/assassins/status-feed')
    .then(response => response.json())
   .then(data => setEvents(data)); 
    return (
        <div className = {styles.feedContainer}>
            <p className = {styles.title}>Kill Feed</p>
            {events.reverse().map((person)=>(person.old_status == "ALIVE" && person.new_status == "DEAD")?<div className = {styles.killBlurb}><img src = {killIcon}/> {person.name} has been eliminated</div>:"")}
        </div>
    )
}

export default Feed