import classes from "../style/question.module.css";
import Answers from "./Answers";

export default function Question({question,submission}){
    return(
        <>
             <div className={classes.question}>
                <div className={classes.qtitle}>
                    <span className="material-symbols-outlined">help</span>
                    <p>{question.title}</p>
                </div>

                <Answers input={false} options={question.options} submission={submission} className={classes.lab}/>
            </div>
        </>
    )
}