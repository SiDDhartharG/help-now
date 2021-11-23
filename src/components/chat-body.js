import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

const ChatBody = ({ users, setUsers, selectedUserId, setSelectedUserId }) => {
    const [message, setMessage] = useState("")
    const onClickSendButton = () => {
        if (message !== "") {
            var userToUpdate = users
            userToUpdate[selectedUserId].messages?.push({ text: message, time: new Date() })
            setUsers({ ...userToUpdate })
            setMessage("")
        }
    }
    console.log(users);
    return selectedUserId && users[selectedUserId] && <div
        style={{ flexDirection: "column", display: "flex", flexGrow: "10" }}
    >
        <div style={{ background: "white", height: "50px", borderBottom: "2px solid #babfbe" }}>{users[selectedUserId].user_name}</div>
        <div style={{ flexGrow: "10", overflowY: "scroll" }}>{users[selectedUserId].messages?.map(message => <div>{message?.text}</div>)}</div>
        <div style={{ background: "white", justifyContent: "space-around", display: "flex", alignItems: "center", padding: "10px", height: "50px", borderTop: "1px solid #babfbe" }}>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ padding: "15px", width: "90%", border: "1px solid #babfbe", borderRadius: "50px" }}
                placeholder="Message" />
            <SendIcon onClick={() => onClickSendButton()} />
        </div>
    </div>
}

export default ChatBody