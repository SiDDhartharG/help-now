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
        console.log("CHAGE");
        console.log(users);
        localStorage.setItem("HELP_NOW_CHAT", JSON.stringify(users))
    }, [users])
    return <div style={{ height: "inherit", display: "flex", flexDirection: "column" }}>
        <div style={{ height: "60px", background: "#59ebc4" }}>
            <Header />
        </div>
        <div style={{ display: "flex", flexGrow: 10 }}>
            <div style={{ borderRight: "2px solid #babfbe", width: "20%", overflowY: "hidden" }}>
                <SideBar
                    users={users}
                    setUsers={setUsers}
                    selectedUserId={selectedUserId}
                    setSelectedUserId={setSelectedUserId}
                />
            </div>
            <div style={{ backgroundImage: `url(${MainBodyBackgroundImage})`, width: "80%", overflowY: "hidden" }}>
                <ChatBody
                    users={users}
                    setUsers={setUsers}
                    selectedUserId={selectedUserId}
                    setSelectedUserId={setSelectedUserId}
                />
            </div>
        </div>
    </div >
}
export default HomeScreen
