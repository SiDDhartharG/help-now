import React from 'react';
import MainBodyBackgroundImage from '../utils/mainBodyBackground.jpg'
import Header from './header';
import SideBar from './side-bar';
import ChatBody from './chat-body';

const HomeScreen = () => {
    return <div style={{ height: "inherit", display: "flex", flexDirection: "column" }}>
        <div style={{ height: "60px", background: "#59ebc4" }}>
            <Header />
        </div>
        <div style={{ display: "flex", flexGrow: 10 }}>
            <div style={{ borderRight: "2px solid #babfbe", width: "20%", overflowY: "hidden" }}>
                <SideBar />
            </div>
            <div style={{ backgroundImage: `url(${MainBodyBackgroundImage})`, width: "80%", overflowY: "hidden" }}>
                <ChatBody />
            </div>
        </div>
    </div >
}
export default HomeScreen
