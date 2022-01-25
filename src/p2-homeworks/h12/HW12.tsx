import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'white'];

function HW12() {

    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const dispatch = useDispatch()
    const onChangeOption = (color: string) => {
        dispatch(changeThemeC(color))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect options={themes} onChangeOption={onChangeOption}/>

            <hr/>
        </div>
    );
}

export default HW12;
