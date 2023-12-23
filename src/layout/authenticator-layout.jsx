import React from "react";
import { Layout } from "antd";
import PublicRouter from "../router/public-router";


const AuthenticatorLayout = (props) => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Layout.Content>
                <PublicRouter />
            </Layout.Content>
        </Layout>
    )
}

export default AuthenticatorLayout;