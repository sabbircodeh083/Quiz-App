import classes from "../style/analysis.module.css";
import Question from "../conponents/question";
import { useContext } from "react";
import ResultContext from "../contexts/ResultContext";

export default function Analysis(){
    const{questionList,correctedAnswer,submission}=useContext(ResultContext);    


     if (
        !submission ||
        !questionList ||
        submission.length === 0 ||
        questionList.length === 0
    ) {
        return <div>Loading...</div>;
    }
    return(
        <>
            <h1>Question Analysis</h1>
            <p className={classes.summary}>You answerd {correctedAnswer} out of {questionList.length} Questions correctly</p>
            {questionList.map((question,index)=>    
                <Question 
                    key={index}
                    question={question}
                    submission={submission[index]} 

                />
            )}
            
            
        </>
    )
}