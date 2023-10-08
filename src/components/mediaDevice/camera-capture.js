import React, { useRef, useState } from "react";
import { StyledDiv, StyledText } from "../../styledComponents/styles-one";
import { Spin, message } from "antd";

const CameraCapture = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isRecording, setIsRecording] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);

    const handleStartCamera = async () => {
        setIsLoading(true)
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
            setIsLoading(false);
            setIsRecording(true);
        } catch (err) {
            message.error("Error accessing the camera")
            console.error('Error accessing the camera:', err);
            setIsLoading(false);
        }
    }

    const handleStopCamera = () => {
        videoRef?.current?.srcObject?.getTracks()?.forEach((track) => { track.stop() });
        setIsRecording(false);
    }

    // capture image
    const handleCaptureImage = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const newImage = canvas.toDataURL('image/jpeg');
        setImageSrc(newImage);
        handleStopCamera();
    }



    return (
        <React.Fragment>
            <StyledText fs="20px" fw="700">Camera Capture</StyledText>
            <canvas ref={canvasRef} style={{ display: "none" }} />

            <Spin spinning={isLoading}>
                <StyledDiv d={!imageSrc || isRecording ? "flex" : "none"} jc="center">
                    <video ref={videoRef} autoPlay playsInline muted onClick={handleCaptureImage}
                        style={{ width: "80%", height: "60vh", border: "2px solid  black" }} />
                </StyledDiv>
            </Spin>
            <StyledDiv d={imageSrc && !isRecording ? "flex" : "none"} jc="center">
                <img src={imageSrc} style={{ width: "auto", height: "60vh", border: "2px solid  black" }} />
            </StyledDiv>

            <StyledText fs="18px" fw="600" style={{ cursor: "pointer" }}
                onClick={isRecording ? handleStopCamera : handleStartCamera} >
                {isRecording ? "Stop" : "Start"} Camera
            </StyledText>

            {isRecording &&
                <StyledText fs="18px" fw="600" style={{ cursor: "pointer" }}
                    onClick={handleCaptureImage} > Capture Image
                </StyledText>
            }

        </React.Fragment>
    )

}

export default CameraCapture