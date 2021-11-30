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

    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{props.affair.name}</div>

            <button className={styles.button} onClick={deleteCallback}>Delete</button>
        </div>
    )
}

export default Affair
