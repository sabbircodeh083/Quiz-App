import classes from "../style/textInput.module.css";

export default function TextInput({type,placeholder,icon,...rest}){
    return(
        <>
            <div className={classes.textinput}>
                <input type={type} placeholder={placeholder} {...rest}/>
                <span className="material-symbols-outlined">{icon}</span>
            </div>
        </>
    )
}