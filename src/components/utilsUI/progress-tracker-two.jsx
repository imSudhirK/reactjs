import React from "react";
import { StyledDiv, StyledImage, StyledText } from "../../styledComponents/styles-one";
import checkIcon from "../../icons/check-green-icon.svg"
import checkGrey from "../../icons/check-grey-icon.svg"
import clockIcon from "../../icons/clock-yellow-icon.svg"
import progressData from "../../datas/two-progress-tracker"

const ProgressTrackerTwo = () => {
    return (
        <StyledDiv d="flex" p="20px" bs="0 0 4px 0 rgba(0, 0, 0, 0.25)" br="5px">
            <StyledDiv w="15%">
                {progressData?.map((pData, index) => {
                    const showLine = index != progressData.length - 1;
                    return (<>
                        <StyledImage src={index < 1 ? checkIcon : index == 1 ? clockIcon : checkGrey} w="20px" h="auto" />
                        {showLine && <StyledDiv d="flex" jc="center" ai="center">
                            <StyledDiv h="100px" w="0px" b={index < 1 ? "1px solid #4BB543" : "1px solid #DADADA"} />
                        </StyledDiv>}
                    </>)
                })}
            </StyledDiv>
            <StyledDiv w="75%">
                {progressData?.map((pData) => {
                    return (<StyledDiv h="120px">
                        <StyledDiv><StyledText fs="18px" fw="530" ta="left">{pData.label}</StyledText></StyledDiv>
                        <StyledDiv><StyledText fw="600" ta="left">{pData.date} | {pData.time}</StyledText></StyledDiv>
                    </StyledDiv>)
                })}
            </StyledDiv>
        </StyledDiv>
    )
}

export default ProgressTrackerTwo;