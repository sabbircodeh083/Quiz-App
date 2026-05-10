import classes from "../style/video.module.css";
import { Link } from "react-router-dom";

export default function Video({title,noq,id}){
    return(
        <>
            {noq>0? (
                <Link to={`/quiz/${id}`}
                    state={title}
                >
                    <div className={classes.video}>
                        <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="Thambnail" />
                        <p>{title}</p>
                        <div className={classes.qmeta}>
                            <p>{noq} Questions</p>
                            <p>Score: {noq*5}</p>
                        </div>
                    </div>
            </Link>
            ):(
                <div className={classes.video} onClick={()=>alert("Quiz hasn't create against this video")}>
                        <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="Thambnail" />
                        <p>{title}</p>
                        <div className={classes.qmeta}>
                            <p>{noq} Questions</p>
                            <p>Score: {noq*5}</p>
                        </div>
                    </div>
            )}
        </>
    )
}
