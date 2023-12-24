import { Form, Input, Modal, Spin, message } from "antd";
import React, { useState } from "react";
import { StyledButton, StyledText } from "../../styledComponents/styles-one";
import { createNotes, updateNotes } from "../../api/notes";


const EditNotes = (props) => {
    const { showModal, toggleModal, notes, fetchAllNotes, isAddNotes = true } = props
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

    const handleEditNotes = (values) => {
        setIsLoading(true);
        if (isAddNotes) {
            createNotes(values).then(resp => {
                setIsLoading(false);
                message.info("Notes updated successfully")
                toggleModal();
                fetchAllNotes();
            }).catch(err => {
                setIsLoading(false);
                console.log(err)
                message.error(err.response?.data || err?.message || "Failed to add Notes")
            })
        } else {
            const updatedNotes = { ...values, id: notes._id }
            updateNotes(updatedNotes).then(resp => {
                setIsLoading(false);
                message.info("Notes added successfully")
                toggleModal();
                fetchAllNotes();
            }).catch(err => {
                setIsLoading(false);
                message.error(err.response?.data || err?.message || "Failed to update Notes")
            })
        }
    }

    return (
        <Modal
            title={isAddNotes ? "Add Notes" : "Edit Notes"}
            open={showModal}
            closable={true}
            onCancel={toggleModal}
            footer={false}
        >
            <Spin spinning={isLoading} delay={500}>
                <Form layout="vertical" autoComplete="off" style={{ marginBottom: '-20px' }}
                    form={form} onFinish={handleEditNotes}
                    initialValues={{
                        title: notes?.title,
                        description: notes?.description
                    }}>
                    <Form.Item name="title" label="title"
                        rules={[{ required: true, message: 'Notes title' }]}>
                        <Input placeholder='Enter notes title'
                            defaultValue={notes?.title} />
                    </Form.Item>
                    <Form.Item name="description" label="Notes description"
                        rules={[{ required: true, message: 'Enter your notes' }]}>
                        <Input.TextArea placeholder='Notes'
                            defaultValue={notes?.description}
                            autoSize={{ minRows: 8, maxRows: 8 }} />
                    </Form.Item>
                    <Form.Item name="tag" label="tags">
                        <Input placeholder='Tags'
                            defaultValue={notes?.tags} />
                    </Form.Item>
                    <Form.Item>
                        <StyledButton bgc="#3766FE" bdr="none" w="100%" br="4px" h="42px"
                            disabled={false} htmlType="submit">
                            <StyledText fs="16px" lh="16.8px" ls="0.15px" fw="700" c="#fff">Submit</StyledText>
                        </StyledButton>
                    </Form.Item>
                </Form>
            </Spin>
        </Modal>
    )
}

export default EditNotes;