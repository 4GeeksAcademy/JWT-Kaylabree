import React, { useContext } from "react";
import {Context} from "../store/appContext"
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const {actions} = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit= async(event) => {
        event.preventDefault();

        const email=event.target.emailInput.value;
        const password=event.target.passwordInput.value;
        const confirmPassword=event.target.confirmPasswordInput.value;

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        const response=await actions.signUp(email, password);
        if (response) {
            alert("sign up successful");
            navigate("/log-in")
        } else{
            console.log("sign up failed")
        }
    }

    return(
        <div className="auth-div">
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit} className="d-flex flex-column w-100 align-items-center">
                <input type="email" name="emailInput" placeholder="email address" required /> 
                <input type="password" name="passwordInput" placeholder="password" required />
                <input type="password" name="confirmPasswordInput" placeholder="confirm password?" required  />
                <button className="btn btn-primary mt-3 " type="submit">sign up</button>
            </form>
        </div>
    )
}