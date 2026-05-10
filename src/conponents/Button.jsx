import classes from "../style/Button.module.css";

export default function Button({children,className,...rest}){
    return(
        <>
            <button className={`${className} ${classes.button}`} {...rest} >
                {children}
            </button>
        </>
    )
}