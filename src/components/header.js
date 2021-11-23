import React from 'react';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const Header = () => {
    return <div style={{ height: "60px", background: "#59ebc4", position: "fixed", top: 0, right: 0, left: 0, padding: "0px 16px", display: "flex", alignItems: "center" }}>
        <MedicalServicesIcon />Doctor e-clinics
    </div>
}

export default Header