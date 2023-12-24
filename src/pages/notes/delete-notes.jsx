import React, { useState } from "react";
import { Modal, Spin, message } from "antd";
import { StyledButton, StyledDiv, StyledText } from "../../styledComponents/styles-one";
import { deleteNotes } from "../../api/notes";

const DeleteNotes = (props) => {
    const { showModal, toggleModal, notes, fetchAllNotes } = props;
    const [isLoading, setIsLoading] = useState(false)

    const handleDeleteNotes = () => {
        setIsLoading(true)
        deleteNotes(notes._id).then(resp => {
            setIsLoading(false)
            message.info(resp.data);
            fetchAllNotes();
            toggleModal();
        }).catch(err => {
            setIsLoading(false);
            message.error(err.response?.data || err?.message || "Deletion Failed");
        })
    }


    return (
        <Modal
            open={showModal}
            closable={true}
            onCancel={toggleModal}
            footer={false}
        >
            <Spin spinning={isLoading} delay={500}>
                <StyledText>Are you sure want to delete this notes ?</StyledText>
                <StyledDiv d="flex" jc="center" mt="10px">
                    <StyledButton bgc="red" mr="10%" onClick={handleDeleteNotes}>Yes</StyledButton>
                    <StyledButton onClick={toggleModal}>No</StyledButton>
                </StyledDiv>
            </Spin>
        </Modal>
    )
}

export default DeleteNotes;