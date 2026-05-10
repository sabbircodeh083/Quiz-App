import classes from "../style/layout.module.css"
import Nav from "./nav"

export default function Layout({children}){
    return(
        <>
            <Nav />
            <div className={classes.main}>
                <div className={classes.container}>
                
                    {children}
                    
                </div>
            </div>
        </>
    )
}