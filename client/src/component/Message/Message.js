import React from 'react'
import "./Message.css";


const Message = ({ user, message, classs }) => {
    if (user) {
        return (
            <div className={`messageBox ${classs}`}  >
                <div className="name">{`${user}`}</div>
                <div>{`${message}`}</div>

            </div>
        )
    }
    else {


        return (
            <div className={`messageBox ${classs}`}>
                <div className="name">{`You`}</div>
                <div>{`${message}`}</div>
            </div>
        )
    }
}

export default Message
