import React from "react";
import { getDateToDisplay } from "../utils";

const MessageBox = ({ message }) => {
    return <div style={{ marginLeft: message.sender === "CurrentUser" && "auto", background: message.sender === "CurrentUser" ? "#59ebc4" : "white", padding: "8px", margin: "15px", borderRadius: "5px", maxWidth: "350px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{message.sender === "CurrentUser" ? "" : message.sender}</div>
            <div style={{ fontSize: 11 }}>{getDateToDisplay(message.time)}</div>
        </div>
        <div>
            {message.text}
        </div>
    </div>
}

export default MessageBox