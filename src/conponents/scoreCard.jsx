import classes from "../style/scoreCard.module.css";
import Iimg from "../assets/img/success.png";

export default function ScoreCard(props){
    return(
        <>
            <div className={classes.scoreCard}>
                <div className={classes.score}>
                    <h3>Your Score is</h3>
                    <h3>{props.Num} out of {props.totalNum}</h3>
                </div>

                <div className={classes.illustration}>
                    <img src={Iimg} alt="Image for success"/>
                </div>
            </div>
        </>
    )
}