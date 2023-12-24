import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom"
import loadable from "@loadable/component";

const Fallback = loadable(() => import("../components/utilsUI/loading"));
const Dashboard = loadable(() => import("../containers/dashboard"));
const Contact = loadable(() => import("../containers/contact"));
const Notes = lazy(() => import("../pages/notes"));
const TestComponenet = lazy(() => import("../containers/test-container"));

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
                <Route
                    path="/notes"
                    element={<Notes {...props} />}
                />
                <Route
                    path="/test"
                    element={<TestComponenet {...props} />}
                />
            </Routes>
        </Suspense>
    )
}

export default PrivateRouter;