import React from "react"
import styles from "./Contact.module.css"


function Contact() {
    return (
        <div className = {styles.container}> 
        <p className={styles.heading}>If you have any concerns about the game, PLEASE contact one of us FIRST.</p>
        <div className = {styles.contact}>
            <p className = {styles.header}>Ben Borgers</p>
            <p className = {styles.number}>(617)834-2138</p>
        </div>
        <div className = {styles.contact}>
            <p className = {styles.header}>Abby Sommers</p>
            <p className = {styles.number}>(339)927-0986</p>
        </div>
        <div className = {styles.contact}>
            <p className = {styles.header}>Kyuho Lee</p>
            <p className = {styles.number}>(781)780-1459</p>
        </div>
        <div className = {styles.contact}>
            <p className = {styles.header}>Nico Anderberg</p>
            <p className = {styles.number}>(781)504-2174</p>
        </div>

            
            
            
            
        </div>
    )
}

export default Contact