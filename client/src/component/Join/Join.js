import React, { useState } from 'react'
import './join.css'
import { Link } from "react-router-dom";

let user;
const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
}

function Join() {
    const [name, setname] = useState("");

    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <h1>Chit Chat</h1>
                    <input onChange={(e) => setname(e.target.value)} type="text" id="joinInput" placeholder="Enter Your Name" />
                    <Link onClick={(event) => !name ? event.preventDefault() : null} to="/chat">  <button onClick={sendUser} className="btn">Login</button></Link>
                </div>
            </div>
        </>
    )
}

export default Join
export { user }
