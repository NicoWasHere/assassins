import React from "react"
import {
    NavLink
} from "react-router-dom";
import styles from './Bar.module.css'
import logo from '../img/logo.png'
function Bar(props) {
    return (
        <div className={styles.fullbar}>
             <div>
                 <a href="/"><img className={styles.logo} src={logo} alt="logo" width="200" height="200" /></a>
            </div>
            <nav className={styles.navbar} id="bar">
                <NavLink activeClassName={styles.active} className={styles.menuitem} to='/about' title="about">about</NavLink>
                <div className = {styles.square}></div>
                <NavLink activeClassName={styles.active} className={styles.menuitem} to='/rules' title="rules">rulebook</NavLink>
                <div className = {styles.square}></div>
                <a className = {styles.menuitem} href="https://forms.gle/yzaUzCWqpxc9AxVY8" title="register">register</a>
                <div className = {styles.square}></div>
                <NavLink activeClassName={styles.active} className={styles.menuitem} to='/contact' title="contact">contact</NavLink>
            </nav>
        </div>
    )
}

export default Bar