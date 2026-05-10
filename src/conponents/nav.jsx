import logo from "../assets/img/icon.png";
import Account from "./Account";
import classes from "../style/nav.module.css";
import { Link } from "react-router-dom";
export default function Navber(){
    return(
        <>
        <div className={classes.nev}>
        <div className={classes.brand}>
            <ul>
                <li>
                    <Link to="/">
                        <img src={logo} alt="Logo Icon"/>
                        <h3>Give a Quiz</h3>
                    </Link>
                </li>
            </ul>
        </div>
            <Account/>
        </div>
        </>
    )
}