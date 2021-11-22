import { Button } from '@mui/material';
import React, { useState } from 'react';
import AddUserModal from './add-user-modal';

const SideBar = ({ users, setUsers, selectedUserId, setSelectedUserId }) => {
    const [isAddUserModelOpen, setIsAddUserModelOpen] = useState(false)
    const showAllUsers = () => {
        return Object.keys(users).map(userId => <div onClick={() => setSelectedUserId(userId)}>
            {users[userId].user_name}
        </div>)
    }
    const showNoUserAdded = () => {
        return <div>No User Added</div>
    }
    const onClickAddUserButton = () => {
        setIsAddUserModelOpen(true)
    }
    return <div>
        <Button onClick={() => onClickAddUserButton()}>Add User</Button>
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