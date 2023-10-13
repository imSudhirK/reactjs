import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom"
import loadable from "@loadable/component";

const Fallback = loadable(() => import("../components/utilsUI/loading"));
const Dashboard = loadable(() => import("../containers/dashboard"));
const Contact = loadable(() => import("../containers/contact"));

const PrivateRouter = (props) => {
    return (
        <Suspense fallback={<Fallback />}>
            <Routes>
                <Route
                    path="/dashboard"
                    element={<Dashboard {...props} />}
                />
                <Route
                    path="/contact"
                    element={<Contact {...props} />}
                />
            </Routes>
        </Suspense>
    )
}

export default PrivateRouter;