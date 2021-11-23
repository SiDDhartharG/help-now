import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import MessageBox from './message-box';
import MainBodyBackgroundImage from '../utils/mainBodyBackground.jpg'

const ChatBody = ({ users, setUsers, selectedUserId, setSelectedUserId }) => {
    const [message, setMessage] = useState("")
    const onClickSendButton = () => {
        if (message !== "") {
            var userToUpdate = users
            userToUpdate[selectedUserId].messages?.push({ sender: "CurrentUser", text: message, time: new Date() })
            setUsers({ ...userToUpdate })
            document.getElementById("all-messages").scrollTop = document.getElementById("all-messages").scrollHeight + 60
            setMessage("")
        }
    }
    return selectedUserId && users[selectedUserId] && <div
        style={{ position: "fixed", right: 0, borderLeft: "1px solid black", width: "80%", overflowY: "hidden", display: "flex" }}>
        <div style={{ background: "white", position: "fixed", top: "60px", width: "80%", height: "50px", borderBottom: "1px solid #babfbe", zIndex: "1" }}>
            {users[selectedUserId].user_name}
        </div>
        <div id="all-messages" style={{ overflowY: "scroll", flexGrow: 10, backgroundImage: `url(${MainBodyBackgroundImage})`, position: "fixed", top: "110px", bottom: "70px", width: "80%" }}>
            {users[selectedUserId].messages?.map(message => <MessageBox message={message} />)}
        </div>
        <div style={{ background: "white", position: "fixed", bottom: 0, width: "79%", justifyContent: "space-around", display: "flex", alignItems: "center", padding: "10px", height: "50px", borderTop: "1px solid #babfbe" }}>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ padding: "15px", maxWidth: "80%", minWidth: "70%", width: "80%", border: "1px solid #babfbe", borderRadius: "50px" }}
                placeholder="Message" />
            <SendIcon onClick={() => onClickSendButton()} />
        </div>
    </div>
}

export default ChatBody