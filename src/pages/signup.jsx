import classes from "../style/signup.module.css";
import Illustration from "../conponents/illustration.jsx";
import Form from "../conponents/form.jsx";
import SignUpImg from "../assets/img/signup.svg"
import TextInput from "../conponents/textInput.jsx";
import CheckBox from "../conponents/checkbox.jsx";
import Button from "../conponents/Button.jsx";
import Info from "../conponents/info.jsx";
import { Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { useState } from "react";
import {useAuth} from "../contexts/authContext.jsx"

export default function Signup(){

     
    const[email,setEmail]=useState("");
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");
    const[agree,setAgree]=useState();
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");
    const navigate=useNavigate();
     
    const {Signup} =useAuth();

    async function submitHandeler(e){
        e.preventDefault();

        if(password!==confirmPassword)
        {
            return setError("Password are not matching");
        }

    
            try{
                setError("");
                setLoading(true);
                await Signup(email,password,userName);
                navigate("/");

            }catch(e){
                setError(`Failed to create an Accaunt ${e.message}`);
                setLoading(false);
            }
        

    }
    return(
        <>
            <h2>Create an account</h2>
            <div className={classes.column}>
                <Illustration src={SignUpImg} alt="Sign Illustration" />
                <Form onSubmit={submitHandeler}>
                    <TextInput type="text" required placeholder="Enter name" icon="person" value={userName} onChange={(e)=> setUserName(e.target.value)} />
                    <TextInput type="text" required placeholder="Enter email" icon="alternate_email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <TextInput type="password" required placeholder="Enter password" icon="lock" value={password} onChange={(e)=> setPassword(e.target.value)} />
                    <TextInput type="password" required placeholder="Confirm password" icon="lock_reset" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
                    <CheckBox text="I agree to the Terms and Conditions" required value={agree} onChange={(e)=> setAgree(e.target.value)} />
                    <Button className={classes.signUpButton} disabled={loading} type="submit" >Submit Now</Button>
                    {error && <p className="error">{error}</p>}
                </Form>
            </div>
            <Info>Already have an account? <Link to="/login">Login</Link> instead</Info>
        </>
    )
}