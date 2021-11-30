import React from 'react'
import c from './Message.module.css'

export type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={c.message}>
            <div className={c.message__avatar}><img alt='avatar'
                src={props.avatar}/></div>
            <div className={c.message__body}>
                <div className={c.message__body_item}>
                    <p className={c.message__name}>{props.name}</p>
                    <p className={c.Message__text}>{props.message}</p>
                </div>
                <div className={c.message__time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
