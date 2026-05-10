import { Fragment } from "react";
import classes from "../style/Answers.module.css";
import CheckBox from "./checkbox";

export default function Answers({className,options=[],changeHandle,submission,input}){

    const getBackground = (status) => {
  switch (status) {
    case "correct":
      return "#00ff84 ";

    case "wrong":
      return "#ffc0c7";

    case "corrected":
      return "green";

    case "neutral":
      return "#e4e8ee"; // keeps original background

    default:
      return "#e4e8ee";
  }
};

    return(
        <>
            <div className={`${classes.answers}`}>
                {options.map((option,index)=>(
                    <Fragment key={index}>
                    {input?(
                        <label className={classes.answer} >
                            <CheckBox 
                                text={option.title} 
                                className={className} 
                                onChange={(e)=>changeHandle(e,index)}
                                checked={option.checked}/>
                        </label>):(
                        <label className={classes.answer} 
                            style={{
                                    backgroundColor: getBackground(submission[index]),
                                }}
                        >
                            <CheckBox 
                                
                                text={option.title} 
                                className={className} 
                                submission={submission[index]}
                                />
                        </label>    
                    )
                
                    }
                    </Fragment>
                ))}
            </div>
        </>
    )
}