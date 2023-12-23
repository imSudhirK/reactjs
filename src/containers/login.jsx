import React, { useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd"
import { StyledDiv, StyledText } from "../styledComponents/styles-one"
import { logIn } from "../api/users";
import { setAccessToken, setRefreshToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const values = Form.useWatch([], form);
    const [submittable, setSubmittable] = useState(false);

    const goToSignUp = () => { navigate('/signup') }

    const handleFormValidation = () => {
        form.validateFields({ formOne: false, }).then(
            () => { setSubmittable(true); },
            () => { setSubmittable(false); }
        );
    }

    const handleSubmit = () => {
        logIn(values).then(resp => {
            const { accessToken, refreshToken } = resp.data;
            console.log(accessToken, refreshToken);
            if (accessToken && refreshToken) {
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);
                window.location.href = "/dashboard"
            } else throw resp;
        }).catch(err => {
            return message.error(err.response?.data || err.message)
        })
    }

    useEffect(() => {
        handleFormValidation()
    }, [values])

    return (
        <StyledDiv d="flex" jc="center" h="100vh" w="100%">
            <StyledDiv h="320px" w="600px" br="10px" p="20px" mt="100px" bs="0px 0px 16px 0px #00000040" b=".5px solid black">
                <Form form={form} name="formOne" layout="vertical">
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please Enter Email!' }]}
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
                    <Form.Item>
                        <Button type="primary" htmlType="submit"
                            disabled={!submittable} onClick={handleSubmit}
                        >Submit</Button>
                    </Form.Item>
                </Form>
                <StyledText>Don't have Account ?
                    <span style={{ color: "blue", cursor: "pointer" }} onClick={goToSignUp}> Register</span>
                </StyledText>
            </StyledDiv>
        </StyledDiv>
    )
}

export default Login;