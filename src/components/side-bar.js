import React from 'react';

const SideBar = ({ users, setUsers, selectedUserId, setSelectedUserId }) => {
    const showAllUsers = () => {
        return Object.keys(users).map(userId => <div>
            {users[userId].name}
        </div>)
    }
    const showNoUserAdded = () => {
        return <div>No User Added</div>
    }
    return <div>
        {Object.keys(users).length > 0 ? showAllUsers() : showNoUserAdded()}
    </div>
}

export default SideBar