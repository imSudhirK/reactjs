import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom"
import loadable from "@loadable/component";

const Fallback = loadable(() => import("../components/utilsUI/loading"));
const AuthenticatorLayout = loadable(() => import("../containers/authenticatorLayout"));
const Login = loadable(() => import("../containers/login"))


const PublicRouter = (props) => {
    return (
        <Suspense fallback={<Fallback />}>
            <Routes>
                <Route
                    path="/"
                    element={<AuthenticatorLayout {...props} />}
                />
                <Route
                    path="/login"
                    element={<Login {...props} />}
                />
                <Route
                    path="/login"
                    element={<Login {...props} />}
                />
                <Route
                    path="/login"
                    element={<Login {...props} />}
                />
            </Routes>
        </Suspense>
    )
}

export default PublicRouter;