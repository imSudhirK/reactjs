import React, { useEffect, useRef, useState } from "react";
import { StyledButton, StyledDiv } from "../../styledComponents/styles-one"
import { Modal, Slider } from "antd";

const VideoPlayer = ({
    videoFile,
    videoTitle,
    openVideoPlayer,
    toggleVideoPlayer
}) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // handle play and Pause video 
    const handlePause = () => { if (videoRef) { videoRef?.current.pause(); setIsPlaying(false); } }
    const handlePlay = () => { if (videoRef) { videoRef?.current.play(); setIsPlaying(true); } }

    // handle timer 
    const handleTimeUpdate = () => {
        if (videoRef) {
            setCurrentTime(videoRef.current?.currentTime || 0);
            // handle end of video
            if (videoRef.current?.currentTime == videoRef.current?.duration) setIsPlaying(false);
        }
    }

    const handleDurationChange = () => { if (videoRef) setDuration(videoRef.current?.duration); }

    const handleTimer = () => {
        const video = videoRef.current;
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('durationchange', handleDurationChange);
        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('durationchange', handleDurationChange);
        };
    }

    // handle video progress change 
    const handleVideoProgressChange = (newTime) => {
        if (videoRef) {
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    }

    useEffect(() => {
        handleTimer();
    }, [])

    return (
        <Modal
            title={videoTitle || "Video Player"}
            open={openVideoPlayer}
            footer={null}
            onCancel={() => { handlePause(); toggleVideoPlayer(); }}
            style={{ top: 30, minWidth: "70%", maxHeight: "80vh" }}
        >
            <StyledDiv d="flex" jc="center"><video ref={videoRef} src={videoFile} style={{ width: "100%" }}></video></StyledDiv>

            <StyledDiv d="flex" jc="center">
                <StyledDiv ta="left" mr="20px">{Math.floor(currentTime)}</StyledDiv>
                <Slider
                    value={Math.floor(currentTime)}
                    min={0}
                    max={Math.floor(duration)}
                    onChange={handleVideoProgressChange}
                    style={{ width: "90%" }}
                />
                <StyledDiv ta="right" ml="20px">{Math.floor(duration)}</StyledDiv>
            </StyledDiv>
            <StyledDiv d="flex" jc="center">
                <StyledButton onClick={isPlaying ? handlePause : handlePlay}>{isPlaying ? "Pause" : "Play"}</StyledButton>
            </StyledDiv>

        </Modal >
    )
}

export default VideoPlayer;