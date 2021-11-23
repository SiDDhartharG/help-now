import { Avatar, Button } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import React, { useState } from 'react';
import AddUserModal from './add-user-modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { getDateToDisplay } from '../utils';

const SideBar = ({ users, setUsers, selectedUserId, setSelectedUserId }) => {
    const [isAddUserModelOpen, setIsAddUserModelOpen] = useState(false)
    const showAllUsers = () => {
        return Object.keys(users).map(userId => <div style={{ padding: "5px 3px", display: "flex", alignItems: "center" }} onClick={() => setSelectedUserId(userId)}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>{users[userId]?.user_name[0]}</Avatar>
            <div style={{ display: "flex", flexGrow: 10, justifyContent: "space-between", padding: "4px" }}>
                <div>
                    <div style={{ fontWeight: 700 }}>{users[userId]?.user_name}</div>
                    {users[userId]?.messages?.length > 0 && <div style={{ fontSize: "11px" }}>{users[userId]?.messages[users[userId]?.messages?.length - 1]?.text} </div>}
                </div>
                {users[userId]?.messages?.length > 0 && <div style={{ fontSize: "11px" }}>{getDateToDisplay(users[userId]?.messages[users[userId]?.messages?.length - 1].time)} </div>}
            </div>
        </div>)
    }
    const showNoUserAdded = () => {
        return <div>No User Added</div>
    }
    const onClickAddUserButton = () => {
        setIsAddUserModelOpen(true)
    }
    return <div style={{ position: "fixed", left: 0, bottom: 0, top: "60px", borderRight: "1px solid gray", zIndex: 2, width: "20%", overflowY: "hidden" }}>
        <div onClick={() => onClickAddUserButton()} style={{ fontWeight: 600, borderBottom: "1px solid #babfbe", padding: "5px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AddCircleIcon sx={{ fontSize: 40, color: "#59ebc4" }} /> Add User
        </div>
        <AddUserModal
            setUsers={setUsers}
            users={users}
            isAddUserModelOpen={isAddUserModelOpen}
            setIsAddUserModelOpen={setIsAddUserModelOpen}
        />
        {Object.keys(users).length > 0 ? showAllUsers() : showNoUserAdded()}
    </div>
}

export default SideBar