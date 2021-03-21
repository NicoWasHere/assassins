import React from "react"
import logo from "../img/logo.png"
import styles from "./Home.module.css"
import Timer from "react-compound-timer"

const times = [
"2021-04-26T00:00:00-0400",
"2021-05-03T00:00:00-0400",
"2021-05-09T00:00:00-0400",
"2021-05-14T00:00:00-0400",
"2021-05-18T00:00:00-0400",
"2021-05-21T00:00:00-0400",
"2021-05-23T00:00:00-0400",
"2021-05-24T00:00:00-0400",
"2021-05-24T12:00:00-0400",
"2021-05-24T18:00:00-0400",
"2021-05-24T21:00:00-0400"
]

const dates = times.map(Date.parse)
const timeDiffs = dates.map((date) => date - Date.now())
const timeDiffsFuture = timeDiffs.filter((timeDiff) => timeDiff > 0)
const soonestTime = Math.min(...timeDiffsFuture)
const current = timeDiffs.findIndex((td) => td === soonestTime)
let timerCaption = current===0 ? "youR Mission beGins in:" : "Kill " + current + " is due in:"


function Home() {
    return (
        <div className = {styles.container}> 
        <img width="300" height="300" className = {styles.pic} src={logo} alt="logo"  />
        <p className = {styles.welcome}>Welcome, Assassins.</p>
        <div>
            <p className = {styles.caption}>{timerCaption}</p>
            <p className = {styles.timer}>
                <Timer
                    initialTime={
                        soonestTime
                    }
                    direction="backward"
                    formatValue={value => `${value < 10 ? `0${value}` : value}`}
                >
                    {() => (
                        <div>
                            <React.Fragment>
                                <Timer.Days/>d_
                                <Timer.Hours />h_
                                <Timer.Minutes />m_
                                <Timer.Seconds />s
                            </React.Fragment>
                        </div>      
                    )}
                </Timer>

            </p>
        </div>
        
        <div className = {styles.bar}>
            <div><a className = {styles.menuitem} href="/about" title="about">about</a></div>
            <div className = {styles.square}></div>
            <div><a className = {styles.menuitem} href="/rules" title="rules">rulebook</a></div>
            <div className = {styles.square}></div>
            <div><a className = {styles.menuitem} href="https://forms.gle/yzaUzCWqpxc9AxVY8" title="register">register</a></div>
            <div className = {styles.square}></div>
            <div><a className = {styles.menuitem} href="/contact" title="contact">contact</a></div>
        </div>
        </div>
    )
}

export default Home