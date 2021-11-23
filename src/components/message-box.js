import React from "react";
import { getDateToDisplay } from "../utils";

const MessageBox = ({ message }) => {
    return <div style={{ display: "flex", flexDirection: "column", alignItems: message.sender === "CurrentUser" ? "flex-end" : "flex-start", }}>
        <div style={{
            background: message.sender === "CurrentUser" ? "#59ebc4" : "white",
            padding: "8px", margin: "15px", borderRadius: "5px",
            maxWidth: "350px",
            minWidth: "150px",
        }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontSize: 13 }}>{message.sender === "CurrentUser" ? "" : message.sender}</div>
                <div style={{ fontSize: 11 }}>{getDateToDisplay(message.time)}</div>
            </div>
            <div>
                {message?.file && <img style={{
                    height: "inherit",
                    maxWidth: "350px",
                    minWidth: "150px"
                }} src={localStorage.getItem(message.file)} alt="Nothing Found In LocalStorage" />}
                {message?.text && message?.text}
            </div>
        </div>
    </div>
}

export default MessageBox