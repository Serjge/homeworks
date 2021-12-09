import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affair.module.css'



type AffairPropsType = {
    // key: number// key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
    const classes = () => {
        switch(props.affair.priority) {
            case "low":  return styles.low
                break
            case "middle": return styles.middle
                break
            case "high": return styles.high
                break
            default: return ''

        }
    }

const classPriority = `${ styles.priority} ${ classes() }`
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{props.affair.name}</div>
            <div className={classPriority}>{props.affair.priority}</div>

            <button className={styles.button} onClick={deleteCallback}>Delete</button>
        </div>
    )
}

export default Affair
