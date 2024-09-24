import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Log_in = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        let email = event.target.emailInput.value;
        let password = event.target.passwordInput.value;
        const response=await actions.logIn(email, password);
        if (response) {
            console.log("login successful");
            navigate("/private")
        } else {
            console.log("Login failed");
            navigate("/private")
        };
    };
    return(
        <div className="auth-div">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="d-flex flex-column w-100 align-items-center">
                <input type="email" name="emailInput" placeholder="email address" required /> 
                <input type="password" name="passwordInput" placeholder="password" required />
                <button className="btn btn-primary mt-3 " type="submit">log in</button>
                <Link to="/sign-up" className="mt-4 ">Click here to sign up</Link>
            </form>
        </div>
    )
}
export default Log_in