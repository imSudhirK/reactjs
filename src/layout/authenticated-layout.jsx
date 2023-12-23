import React from "react";
import { StyledDiv } from "../styledComponents/styles-one";
import SideBar from "../containers/side-bar";
import PrivateRouter from "../router/private-router";


const AuthenticatedLayout = () => {
    return (
        <StyledDiv d="flex">
            <SideBar />
            <PrivateRouter />
        </StyledDiv>
    )
}
export default AuthenticatedLayout;