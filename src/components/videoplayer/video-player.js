import React, { useEffect, useRef, useState } from "react";
import { StyledButton, StyledDiv } from "../../styledComponents/styles-one"
import videoOne from "../../datas/video-one.mp4";
import { Modal, Slider } from "antd";

const VideoPlayer = ({
    videoTitle,
    openVideoPlayer,
    toggleVideoPlayer
}) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // handle play button
    const handlePlayPause = () => {
        const video = videoRef.current;
        if (isPlaying) video.pause();
        else video.play();
        setIsPlaying(!isPlaying);
    }

    // handle timer 
    const handleTimeUpdate = () => {
        const video = videoRef.current;
        setCurrentTime(video.currentTime);
        // handle end of video
        if (video.currentTime == video.duration) setIsPlaying(false);
    }

    const handleDurationChange = () => {
        const video = videoRef.current;
        setDuration(video.duration);
    }

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
        const video = videoRef.current;
        video.currentTime = newTime;
        setCurrentTime(newTime)
    }

    useEffect(() => {
        handleTimer();
    }, [])

    return (
        <Modal
            title={videoTitle || "Video Player"}
            open={openVideoPlayer}
            footer={null}
            onCancel={toggleVideoPlayer}
            style={{ top: 30, minWidth: "70%", maxHeight: "80vh" }}
        >
            <StyledDiv d="flex" jc="center"><video ref={videoRef} src={videoOne} style={{ width: "100%" }}></video></StyledDiv>

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
                <StyledButton onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</StyledButton>
            </StyledDiv>

        </Modal >
    )
}

export default VideoPlayer;