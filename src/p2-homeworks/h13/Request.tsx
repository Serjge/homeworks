import React, {ChangeEvent, useState} from 'react';
import {RequestAPI} from './RequestsAPI';

import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common//c2-SuperButton/SuperButton";


export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    const onClickRequest = () => {
        RequestAPI.getSuccess(checked)
            .then(data => {
                if (data.status === 200) {
                    setMessage(data.data.errorText)
                }
                if(data.status===500) {
                    setMessage(data.data.errorText)
                }
            })
    }

    return (
        <div>
            <SuperButton onClick={onClickRequest}>x</SuperButton>
            <SuperCheckbox type='checkbox' checked={checked} onChange={onChangeValue}/>
            <div>{message}</div>
        </div>
    );
    };