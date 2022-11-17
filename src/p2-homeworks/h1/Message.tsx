import React from 'react'
import style from './Message.module.css';
type PropsType ={
    avatar: string
    name:string
    message:string
    time: string
}
function Message(props:PropsType) {
    return (
        <div className={style.user}>
            <img className={style.avatar} src={props.avatar} alt=""/>
            <div className={style.messageblock}>
                <div className={style.name}>{props.name}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
