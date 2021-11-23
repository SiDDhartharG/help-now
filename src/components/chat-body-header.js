import React from "react";
import AttachmentIcon from '@mui/icons-material/Attachment';
import { Button } from "@mui/material";
import { getBase64 } from "../utils";
import { v4 } from 'uuid'

const ChatBodyHeader = ({ userName, userId, users, setUsers }) => {
    const onLoadFile = (e) => {
        getBase64(e.target.files[0]).then(base64 => {
            var uuid = v4()
            var massageToAppendvar = {
                sender: "CurrentUser",
                text: null,
                file: uuid,
                time: new Date()
            }
            localStorage.setItem(uuid, base64)
            var userToUpdate = users
            userToUpdate[userId].messages?.push(massageToAppendvar)
            setUsers({ ...userToUpdate })
        })
    }

    return <div style={{
        background: "white",
        position: "fixed", top: "60px", width: "80%",
        height: "50px", borderBottom: "1px solid #babfbe",
        zIndex: "1",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }}>
        <div style={{ marginLeft: "10px", fontWeight: "bolder", fontSize: 25 }}>{userName}</div>
        <div style={{ marginRight: "10px" }}>
            <Button component="label"           >
                <AttachmentIcon />
                <input
                    type="file"
                    hidden
                    onChange={(e) => onLoadFile(e)}
                />
            </Button>
        </div>
    </div>
}

export default ChatBodyHeader