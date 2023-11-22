import React from "react";
import { StyledDiv, StyledImage } from "../../styledComponents/styles-one";
import checkIcon from "../../icons/check-green-icon.svg"
import progressData from "../../datas/one-progress-tracker"

const ProgressTrackerOne = () => {
    return (
        <StyledDiv d="flex" jc="space-between" ai="center" >
            {progressData?.map((pData, index) => {
                const showLine = index != progressData.length - 1;
                return (
                    <>
                        <StyledDiv d="flex" fd="column" w="100%" ta="center">
                            <StyledDiv d="flex" jc="center">
                                <StyledDiv h="30px" w="30px" p="5px" br="20px" b="1px solid #8F8F8F" ps="relative">
                                    {index < 1 &&
                                        <StyledDiv w="15px" h="15px" ps="absolute" style={{ top: "-5px", right: "-5px", cursor: "pointer" }} >
                                            <StyledImage src={checkIcon} h="100%" w="auto" />
                                        </StyledDiv>}
                                    <StyledImage src={pData.iconImg} h="100%" w="auto" />
                                </StyledDiv>
                            </StyledDiv>
                            <StyledDiv>{pData.label}</StyledDiv>

                        </StyledDiv>

                        {showLine && <StyledDiv h="0px" w="100%" mt="20px"
                            b={index < 1 ? "1px dashed blue" : "1px dashed #DBDBDB"}>
                        </StyledDiv>}
                    </>
                )
            })}
        </StyledDiv>
    )
}

export default ProgressTrackerOne;