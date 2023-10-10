import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import loadable from "@loadable/component";

const Fallback = loadable(() => import("../components/utilsUI/loading"));
const AuthenticatorLayout = loadable(() => import("../components/authenticatorLayout"));


const PublicRouter = (props) => {
    return (
        <Suspense fallback={<Fallback />}>
            <Router >
                <Routes>
                    <Route
                        path="/"
                        element={<AuthenticatorLayout {...props} />}
                    />
                </Routes>
            </Router>
        </Suspense>
    )
}

export default PublicRouter;