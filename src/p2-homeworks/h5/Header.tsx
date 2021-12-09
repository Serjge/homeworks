import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./RoutesPage";
import styles from "./Header.module.css"

function Header() {

    const classActive = (active: { isActive: boolean }) => active.isActive ? styles.act : ''
    return (
        <div className={styles.wrapper}>
            <button className={styles.button}>menu</button>
            <div className={styles.menu}>
                <NavLink className={classActive} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                <NavLink className={classActive} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={classActive} to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
            </div>

        </div>
    )
}

export default Header
