import React, { useState } from "react";
import { Button, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { v4 } from 'uuid'

const AddUserModal = ({ isAddUserModelOpen, users, setUsers, setIsAddUserModelOpen }) => {
    const [userName, setUserName] = useState(null)
    const styleForModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        textAlign: "center"
    };
    const onChangeInputField = (e) => {
        setUserName(e.target.value)
    }
    const onClickAddUserButton = () => {
        setIsAddUserModelOpen(false)
        var updateUser = users
        updateUser[v4()] = {
            user_name: userName,
            messages: [],
        }
        setUsers({ ...updateUser })
    }
    const isButtonDisabled = () => !(userName && userName !== "")
    return <Modal
        open={isAddUserModelOpen}
        onClose={() => setIsAddUserModelOpen(false)}
    >
        <Box sx={styleForModal}>
            <TextField
                value={userName}
                onChange={onChangeInputField}
                style={{ width: "100%", marginBottom: "30px" }}
                label="Full Name" variant="standard" />
            <Button
                style={{ background: isButtonDisabled() ? "gray" : "#59ebc4", color: !isButtonDisabled() && "white" }}

                disabled={isButtonDisabled()}
                onClick={() => onClickAddUserButton()}
            >
                Add User
            </Button>
        </Box>
    </Modal>
}
export default AddUserModal