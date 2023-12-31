import React, { useEffect, useState } from "react";
import { Button, Card, Form, Input, InputNumber } from "antd"

const FormOne = () => {
    const [form] = Form.useForm();
    const values = Form.useWatch([], form);
    const [submittable, setSubmittable] = useState(false);

    const handleFormValidation = () => {
        form.validateFields({ formOne: false, }).then(
            () => { setSubmittable(true); },
            () => { setSubmittable(false); }
        );
    }

    const handleSubmit = () => {
        console.log(values)
    }

    useEffect(() => {
        handleFormValidation()
    }, [values])

    return (
        <Card style={{ borderRadius: "2%", boxShadow: '0px 0px 16px 0px #00000040' }}>
            <Form form={form} name="formOne" layout="vertical">
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: 'Please Enter username!' }]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: 'Please Enter password!' }]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item
                    name="age"
                    label="Age"
                    rules={[{ required: true, message: 'Please Enter your age!' }]}
                >
                    <InputNumber placeholder="Age" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={!submittable} onClick={handleSubmit}>Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default FormOne;