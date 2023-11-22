import React, { useEffect, useState } from "react";
import { Button, Form } from "antd";
import { InputOTP } from "antd-input-otp";
import { StyledDiv, StyledIcon, StyledText } from "../../styledComponents/styles-one";
import refreshIcon from "../../icons/refresh-blue-icon .svg"


const OtpInputForm = (props) => {
    const { getOtp, submitOtp, otpLength, expiryTime } = props
    
    const [form] = Form.useForm()
    const [otpValues, setOtpValues] = useState([])
    const [otpTimer, setOtpTimer] = useState(expiryTime);

    const handleChangeOtp = (val) => {
        setOtpValues(val)
        return form.setFields([{ name: "otp", errors: [] }]);
    }

    const handleReSendOtp = () => {
        setOtpTimer(expiryTime);
        getOtp();
    }

    const handleFinish = (values) => {
        const { otp } = values;
        if (!otp || otp.length < otpLength || otp.includes("")) {
            return form.setFields([{ name: "otp", errors: ["OTP is invalid."] }]);
        }
        form.setFields([{ name: "otp", errors: [] }])
        submitOtp()
    };

    useEffect(() => {
        if (otpTimer > 0) {
            setTimeout(() => { setOtpTimer(otpTimer - 1) }, 1000);
        }
    }, [otpTimer])


    return (
        <React.Fragment>
            <StyledText fs="14px" fw="510" mb="10px">ENTER VERIFICATION CODE</StyledText>
            <Form form={form} onFinish={handleFinish}>
                <Form.Item name="otp">
                    <InputOTP
                        length={otpLength}
                        inputType="custom"
                        inputRegex="[0-9]"
                        value={otpValues}
                        onChange={(val) => handleChangeOtp(val)}
                    />
                </Form.Item>

                <StyledDiv d="flex" w="100%" jc="space-between" mt="-20px" mb="30px">
                    <StyledText fs="14px" c="#979797">{otpTimer} Sec</StyledText>
                    <StyledDiv d="inline-flex" onClick={handleReSendOtp} style={{ cursor: 'pointer' }}>
                        <StyledIcon src={refreshIcon} w="14px" h="24px" mr="5px" />
                        <StyledText fs="14px" c="#3766FE" style={{ cursor: 'pointer' }}>Resend OTP</StyledText>
                    </StyledDiv>
                </StyledDiv>

                <Form.Item>
                    <Button htmlType="submit" block type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </React.Fragment>
    )
}

export default OtpInputForm;