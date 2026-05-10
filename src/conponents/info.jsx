import classes from "../style/info.module.css";

export default function Info({children}){
    return(
        <>
            <div className={classes.info}>{children}</div>
        </>
    )
}
