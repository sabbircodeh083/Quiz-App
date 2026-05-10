import classes from "../style/checkbox.module.css"
export default function CheckBox({text,submission,className,...rest}){
    return(
        <>
            {(submission!=="wrong")&& (submission!=="corrected")&& (submission!=="correct")&& (submission!=="neutral")&&(
                <label className={`${classes.lab} ${className}`}>
                    <input type="checkbox" {...rest} />
                    <span className={classes.question}>{text}</span>
                </label>
            )}
            {(submission==="corrected")&&(
                <label className={`${classes.lab} ${className} ${classes.corrected}`}>
                    <input type="checkbox" {...rest} />
                    <span className={classes.question}>{text}</span>
                    <div className={classes.note}>
                    <p>Did it correct</p>
                    <span className="material-symbols-outlined"> check_circle</span>
                    </div>
                </label>
            )}


            {(submission==="correct")&&(
                <label className={`${classes.lab} ${className} ${classes.correct}`}>
                    <input type="checkbox" {...rest} />
                    <span className={classes.question}>{text}</span>
                    <div className={classes.note}>
                    <p>Correct Answer</p> 
                    <span className="material-symbols-outlined">check_alert</span>
                    </div>
                </label>
            )}


            {(submission==="wrong")&&(
                <label className={`${classes.lab} ${className} ${classes.wrong}`}>
                    <input type="checkbox" {...rest} />
                    <span className={classes.question}>{text}</span>
                    <div className={classes.note}>
                    <p>Your Answer</p>
                    <span className="material-symbols-outlined">cancel</span>
                    </div>
                </label>
            )}

            {(submission==="neutral")&&(
                <label className={`${classes.lab} ${className}`}>
                    <input type="checkbox" {...rest} />
                    <span className={classes.question}>{text}</span>
                </label>
            )}
        </>
    )
}