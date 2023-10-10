import React from "react";
import { StyledDiv, StyledText } from "../../styledComponents/styles-one";
import searchDocGif from "../../icons/searching-doc.gif";

const Loading = () => {
    return (
        <StyledDiv d="flex" jc="center" ta="center" h="100vh" w="100%" zI="120000" bgc="#ffffe0">
            <StyledDiv>
                <img src={searchDocGif} alt="logo" />
                <StyledText>Fallback Loader</StyledText>
            </StyledDiv>
        </StyledDiv>
    )
}

export default Loading;