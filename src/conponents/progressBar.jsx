import { useRef } from "react";
import classes from "../style/progressBar.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function ProgressBar({percentage,goNext,goPrev,submit}){
    const tooltipRef=useRef();

    const showToolTip=()=>{
        tooltipRef.current.style.display="block";
        tooltipRef.current.style.left=`calc(${percentage}% - 65px)`;
    }

     const closeToolTip=()=>{
        tooltipRef.current.style.display="none";
    }
    return(
        <>
            <div className={classes.progressBar}>
                <Button className={classes.backButton} onClick={goPrev} ><span className="material-symbols-outlined">arrow_back</span></Button>
                <div className={classes.rangeArea}>
                    <div className={classes.tooltip} ref={tooltipRef} >{percentage}% Complete!</div>
                    <div className={classes.rangeBody}>
                        <div className={classes.progress} 
                            style={{width: `${percentage}%`}}
                            onMouseOver={showToolTip} 
                            onMouseOut={closeToolTip}></div>
                    </div>
                </div>

                {percentage!==100?(
                    <Button className={classes.next} onClick={goNext}>
                        <span>Next Question</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Button>
                ):(
                    <Button className={classes.next} onClick={submit}>
                        <span>Submit</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Button>
                )

                }

                
            </div>
        </>
    )
}