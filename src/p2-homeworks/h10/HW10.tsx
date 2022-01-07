import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {initState, loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    let isLoading = useSelector<AppStoreType , initState>(state => state.loading)
    let dispatch = useDispatch()
    const setLoading = () => {
        dispatch(loadingAC(true))
        // dispatch
        setTimeout(()=>dispatch(loadingAC(false)),2000)
        console.log('loading...')
    };

    return (
        <div >
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading.isLoading
                ? (
                    <div style={{height:'50px'}}><img src={isLoading.pic}/></div>
                ) : (
                    <div style={{height:'50px'}}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
