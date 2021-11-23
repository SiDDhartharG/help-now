import React from "react";
import { getDateToDisplay } from "../utils";

const MessageBox = ({ message }) => {
    return <div style={{ background: "#59ebc4", margin: "15px", borderRadius: "5px", maxWidth: "350px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{message.sender === "CurrentUser" ? "" : message.sender}</div>
            <div>{getDateToDisplay(message.time)}</div>
        </div>
        <div>
            {message.text}
        </div>
    </div>
}

export default MessageBox