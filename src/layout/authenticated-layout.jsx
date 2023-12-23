import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StyledDiv } from "../styledComponents/styles-one";
import SideBar from "../containers/side-bar";
import PrivateRouter from "../router/private-router";


const AuthenticatedLayout = () => {
    return (
        <StyledDiv d="flex">
            <Router>
                <SideBar />
                <PrivateRouter />
            </Router>
        </StyledDiv>
    )
}
export default AuthenticatedLayout;