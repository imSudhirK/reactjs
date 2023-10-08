import React, { useRef, useState } from "react";
import { StyledDiv, StyledText } from "../../styledComponents/styles-one";
import { Spin, message } from "antd";
import VideoPlayer from "../videoplayer/video-player";
import { uploadSelfieVideo } from "../../api/apis-one";


const VideoRecorder = () => {
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [videoBlob, setVideoBlob] = useState([]);
    const [showPreview, setShowPreview] = useState(false);

    // start recording with preview
    const startRecording = async () => {
        setIsLoading(true);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setIsLoading(false)
            // display the camera stream in a video element.
            videoRef.current.srcObject = stream;
            // define media recorder reference 
            mediaRecorderRef.current = new MediaRecorder(stream);
            handleMediaRecorder();
            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (error) {
            setIsLoading(false)
            console.error('Error accessing camera:', error);
        }
    }

    // store recorded data as blob
    const handleMediaRecorder = () => {
        const videoChunks = [];
        mediaRecorderRef.current.ondataavailable = (event) => {
            if (event.data.size > 0) videoChunks.push(event.data);
        }

        mediaRecorderRef.current.onstop = () => {
            const newVideoBlob = new Blob(videoChunks, { type: "video/mp4" });
            setVideoBlob(newVideoBlob)
        }
    }

    // stop recording and storing in blob
    const stopRecording = () => {
        videoRef.current.srcObject?.getTracks()?.forEach((track) => { track.stop() });
        if (mediaRecorderRef.current) mediaRecorderRef.current.stop();
        setIsRecording(false);
    }

    // download recorded data as mp4 file
    const handleDownloadVideo = () => {
        const url = URL.createObjectURL(videoBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'recorded-video.mp4';
        a.click();
        URL.revokeObjectURL(url);
    };

    // api to upload recorder video file 
    const handleUploadVideo = () => {
        try {
            const formData = new FormData();
            formData.append("video", videoBlob, "recorded-video.mp4");

            uploadSelfieVideo(formData)
                .then((resp) => { message.info(`Status: ${resp.status}`) })
                .catch((err) => { throw new Error(err.message) })

        } catch (err) {
            console.log("Error uploading video: ", err);
        }
    }


    return (
        <React.Fragment>
            <StyledText fs="20px" fw="700">Video Recorder</StyledText>

            <Spin spinning={isLoading}>
                <StyledDiv d="flex" jc="center">
                    <video ref={videoRef} autoPlay playsInline muted
                        style={{ width: "40%", height: "65vh", border: "2px solid  black" }} />
                </StyledDiv>
            </Spin>

            <StyledText fs="18px" fw="600" style={{ cursor: "pointer" }}
                onClick={isRecording ? stopRecording : startRecording} >
                {isRecording ? "Stop" : "Start"} Recording
            </StyledText>

            {!isLoading && !isRecording && videoBlob && videoBlob.size &&
                <StyledDiv d="flex" jc="center" mt="10px">
                    <StyledText b="1px solid black" br="2px" style={{ cursor: "pointer" }} mr="5%"
                        onClick={() => { setShowPreview(true) }} > Preview</StyledText>
                    <StyledText b="1px solid black" br="2px" style={{ cursor: "pointer" }} ml="5%"
                        onClick={handleDownloadVideo} > Download</StyledText>
                    <StyledText b="1px solid black" br="2px" style={{ cursor: "pointer" }} ml="10%"
                        onClick={handleUploadVideo} > Save & Backup</StyledText>
                </StyledDiv>
            }
            {showPreview &&
                <VideoPlayer
                    videoFile={URL.createObjectURL(videoBlob)}
                    videoTitle={"nothing"}
                    openVideoPlayer={showPreview}
                    toggleVideoPlayer={() => setShowPreview(!showPreview)}
                />
            }
        </React.Fragment>
    )
}

export default VideoRecorder;