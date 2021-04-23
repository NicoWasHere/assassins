import React from "react"
import styles from "./Highlights.module.css"

import Feed from "./Feed.js"


function About() {
    return (
        <div className = {styles.container}> 
            <Feed className = {styles.blub}/>
            {/* <p className = {styles.title}>Highlights</p> */}
        </div>
    )
}

export default About