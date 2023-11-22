import React from "react";
import { StyledDiv } from "../styledComponents/styles-one"
import CurrentLocation from "../components/location/current-location";
// import MapContainer from "../components/location/map-container";

const TestContainer = () => {

    return (
        <StyledDiv h="100vh" w="100%">
            Hello this is TestContainer
            <StyledDiv mw="500px" p="20px" style={{ border: "2px solid black" }}>
                <CurrentLocation />
                {/* <MapContainer/> */}
            </StyledDiv>
        </StyledDiv>
    )
}

export default TestContainer;