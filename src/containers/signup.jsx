import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd"
import { StyledDiv, StyledText } from "../styledComponents/styles-one"
import { signUp } from "../api/users";

const SignUp = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const values = Form.useWatch([], form);
    const [submittable, setSubmittable] = useState(false);

    const goToLogIn = () => { navigate("/login") }

    const handleFormValidation = () => {
        form.validateFields({ formOne: false, }).then(
            () => { setSubmittable(true); },
            () => { setSubmittable(false); }
        );
    }

    const handleSubmit = () => {
        signUp(values).then(resp => {
            if (resp.status === 200) goToLogIn();
            else throw resp;
        }).catch(err => {
            return message.error(err.response?.data || err.message || "Register Failed")
        })
    }

    useEffect(() => {
        handleFormValidation()
    }, [values])

    return (
        <StyledDiv d="flex" jc="center" h="100vh" w="100%">
            <StyledDiv h="380px" w="600px" br="10px" p="20px" mt="100px" bs="0px 0px 16px 0px #00000040" b=".5px solid black">
                <Form form={form} name="formOne" layout="vertical">
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please Enter Your Name!' }]}
                    >
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please Enter Email!' }]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: 'Please Enter password!' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={!submittable} onClick={handleSubmit}>Submit</Button>
                    </Form.Item>
                </Form>
                <StyledText>Already Registered ?
                    <span style={{ color: "blue", cursor: "pointer" }} onClick={goToLogIn}> Login</span>
                </StyledText>
            </StyledDiv>
        </StyledDiv>
    )
}

export default SignUp;