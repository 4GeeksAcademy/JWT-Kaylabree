import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Private = () => {
    const { actions } = useContext(Context)
    const [isAuthenticated, setIsAuthenticated] = useState("pending")

    useEffect(() => {
        let authenticate = async () => {
            try {
                const result = await actions.goPrivate();
                setIsAuthenticated(result ? "yes" : "no");
            } catch (error) {
                console.error("error occured during authentication:", error);
                setIsAuthenticated("no");
            }
        };

        authenticate();
    }, [actions]);


    switch (isAuthenticated) {
        case "pending":
            return (
                <div>
                    <h1>Authentication in progress</h1>
                    <p>please wait while we check your authentication status</p>
                </div>
            )
        case "yes":
            return (
                <div>
                    <h1>Private page access</h1>
                    <p>This page is only accessible to successfully logged in users</p>
                </div>
            )
        case "no":
            return (
                <div>
                    <h1>Access denied</h1>
                    <p>User is not an authenticated person, Please login successfully to access private page</p>
                    <Link to="/log-in">
                        <p>Login</p>
                    </Link>
                </div>
            )
    }
}

export default Private;