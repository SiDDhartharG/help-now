import React, { useEffect, useState } from 'react';
import MainBodyBackgroundImage from '../utils/mainBodyBackground.jpg'
import Header from './header';
import SideBar from './side-bar';
import ChatBody from './chat-body';

const HomeScreen = () => {
    const [users, setUsers] = useState({})
    const [selectedUserId, setSelectedUserId] = useState(null)
    // {userId:{name,message:[{chatBy , time },{chatBy , time },{chatBy , time }]}}
    useEffect(() => {
        setUsers(JSON.parse(localStorage.getItem("HELP_NOW_CHAT")) || {})
    }, [])
    useEffect(() => {
        localStorage.setItem("HELP_NOW_CHAT", JSON.stringify(users))
    }, [users])
    return <div style={{ height: "inherit", display: "flex", flexDirection: "column" }}>
        <Header />
        <div style={{ marginTop: "60px", display: "flex", flexGrow: 10 }}>
            <SideBar
                users={users}
                setUsers={setUsers}
                selectedUserId={selectedUserId}
                setSelectedUserId={setSelectedUserId}
            />
            <ChatBody
                users={users}
                setUsers={setUsers}
                selectedUserId={selectedUserId}
                setSelectedUserId={setSelectedUserId}
            />
        </div>
    </div >
}
export default HomeScreen
