import classes from "../style/account.module.css"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export default function Account(){
    const {currentUser,Logout}=useAuth();

    const nevigate=useNavigate();

    function change(){
        Logout();
        nevigate("/");
    }

    return(
        <>
        <div className={classes.account}>
            {currentUser ?(
                <>
                    <p>{currentUser.displayName}</p>
                    <span className="material-symbols-outlined">account_circle</span>
                    <span className="material-symbols-outlined" style={{cursor: "pointer"}} onClick={change} >logout</span>
                </>
            ):(
                <>
                    <Link to="/signup">Singup</Link>
                    <Link to="/login">Login</Link>
                </> 
            )}
            
        </div>
        </>
    )
}


