import React from 'react';

const ChatBody = ({ users, setUsers, selectedUserId, setSelectedUserId }) => {
    return selectedUserId && users[selectedUserId] && <div>
        {users[selectedUserId].name}
    </div>
}

export default ChatBody