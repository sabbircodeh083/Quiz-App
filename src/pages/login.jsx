import classes from "../style/login.module.css";
import Illustration from "../conponents/illustration";
import loginImg from "../assets/img/login.svg";
import Form from "../conponents/form";
import TextInput from "../conponents/textInput";
import Button from "../conponents/Button";
import Info from "../conponents/info";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/authContext";

export default function Login(){
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [loading,setLoading]=useState(false);
    const [error, setError] = useState("");

    const {Login}=useAuth();
    const nevigate=useNavigate();

    async function submitHandeler(e){
        e.preventDefault();
        try{
            setError("");
            setLoading(true);
            await Login(email,password);
            nevigate("/");
        }catch(e){
            setError(e.message);
            setLoading(false);
        }
    }

    return(
        <>
            <h2>Login to your account</h2>
            <div className={classes.column}>
                <Illustration src={loginImg} alt="Login Illustration"/>

                <Form onSubmit={submitHandeler}>
                    <TextInput type="email" required placeholder="Enter Email" icon="alternate_email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <TextInput type="password" required placeholder="Enter Password" icon="lock" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <Button className={classes.button} disabled={loading} type="submit">Submit Now</Button>
                    { error && <p className="error">{error}</p>}
                    <Info>Don't have an account? <Link to="/signup">Signup</Link> instead</Info>
                </Form>
            </div>
        </>
    )
}