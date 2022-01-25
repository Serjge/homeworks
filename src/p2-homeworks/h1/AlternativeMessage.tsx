import React from 'react'
import c from "./Message.module.css";
import {MessagePropsType} from "./Message";

type AlternativeMessagePropsType = {
    messages: Array<MessagePropsType>
}

function AlternativeMessage(props: AlternativeMessagePropsType) {


    if (props.messages.length === 3) {
        return (
            <div>
                <div className={c.message}>
                    <div className={c.message__avatar_none}/>
                    <div className={c.message__body}>
                        <div className={c.message__body_item}>
                            <p  className={c.message__name}>{props.messages[0].name}</p>
                            <p className={c.Message__text}>{props.messages[0].message}</p>
                        </div>
                        <div className={c.message__time}>{props.messages[0].time}</div>
                    </div>
                </div>
                <div className={c.message}>
                    <div className={c.message__avatar_none}/>
                    <div className={c.message__body}>
                        <div className={c.message__body_item}>
                            <p className={c.Message__text}>{props.messages[1].message}</p>
                        </div>
                        <div className={c.message__time}>{props.messages[1].time}</div>
                    </div>
                </div>
                <div className={c.message}>
                    <div className={c.message__avatar}><img alt='avatar' src={props.messages[2].avatar}/></div>
                    <div className={c.message__body}>
                        <div className={c.message__body_item}>
                            <p className={c.Message__text}>{props.messages[2].message}</p>
                        </div>
                        <div className={c.message__time}>{props.messages[2].time}</div>
                    </div>
                </div>
            </div>
        )
    }
    if (props.messages.length === 2) {
        return (
            <div>
                <div className={c.message}>
                    <div className={c.message__avatar_none}/>
                    <div className={c.message__body}>
                        <div className={c.message__body_item}>
                            <p className={c.message__name}>{props.messages[0].name}</p>
                            <p className={c.Message__text}>{props.messages[0].message}</p>
                        </div>
                        <div className={c.message__time}>{props.messages[0].time}</div>
                    </div>
                </div>
                <div className={c.message}>
                    <div className={c.message__avatar}><img alt='avatar' src={props.messages[1].avatar}/></div>
                    <div className={c.message__body}>
                        <div className={c.message__body_item}>

                            <p className={c.Message__text}>{props.messages[1].message}</p>
                        </div>
                        <div className={c.message__time}>{props.messages[1].time}</div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={c.message}>
                <div className={c.message__avatar}><img alt='avatar'
                                                        src={props.messages[0].avatar}/></div>
                <div className={c.message__body}>
                    <div className={c.message__body_item}>
                        <p className={c.message__name}>{props.messages[0].name}</p>
                        <p className={c.Message__text}>{props.messages[0].message}</p>
                    </div>
                    <div className={c.message__time}>{props.messages[0].time}</div>
                </div>
            </div>

        )
    }

}

export default AlternativeMessage
