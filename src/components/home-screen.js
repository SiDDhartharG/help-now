import React from 'react';
import MainBodyBackgroundImage from '../utils/mainBodyBackground.jpg'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { Grid } from '@mui/material';

const HomeScreen = () => {
    return <div style={{ height: "inherit", display: "flex", flexDirection: "column" }}>
        <div style={{ height: "60px", background: "#59ebc4" }}>
            <MedicalServicesIcon />  Header
        </div>
        <div style={{ display: "flex", flexGrow: 10 }}>
            <div style={{ borderRight: "2px solid #babfbe", width: "20%", overflow: "scroll" }}>
                SideBar
            </div>
            <div style={{ backgroundImage: `url(${MainBodyBackgroundImage})`, width: "80%", overflow: "scroll" }}>
                Body
            </div>
        </div>
    </div >
}
export default HomeScreen
