import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import loadable from "@loadable/component";

const Fallback = loadable(() => import("../components/utilsUI/loading"));
const Login = loadable(() => import("../containers/login"))
const SignUp = loadable(() => import("../containers/signup"))


const PublicRouter = (props) => {
    return (
        <Suspense fallback={<Fallback />}>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Login {...props} />}
                    />
                    <Route
                        path="/login"
                        element={<Login {...props} />}
                    />
                    <Route
                        path="/signup"
                        element={<SignUp {...props} />}
                    />
                </Routes>
            </Router>
        </Suspense>
    )
}

export default PublicRouter;