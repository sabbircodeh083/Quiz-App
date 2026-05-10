import classes from "../style/quiz.module.css";
import _ from "lodash";
import Shadow from "../conponents/shadow";
import Answers from "../conponents/Answers";
import ProgressBar from "../conponents/progressBar";
import MiniPlayer from "../conponents/miniPlayer";
import { useQuestionList } from "../costomHook/useQuestionList";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import {useAuth} from "../contexts/authContext"
import { getDatabase, ref, set } from "firebase/database";

const initialState=null;

const reducer=(state,action)=>{
    switch(action.type){
        case "questions":
            action.value.forEach((question)=>{
                question.options.forEach((option)=>{
                    option.checked=false;
                });
            });
            return action.value;
        case "answers":
            const questions= _.cloneDeep(state);
            questions[action.questionId].options[action.optionIndex].checked=action.value;
            return questions;
        default:
            return state

    }
}
    
export default function Quiz(){
    const location=useLocation();
    const {id}= useParams();
    const{questionList,error,loading}=useQuestionList(id);
    const[qna,dispatch]=useReducer(reducer,initialState);
    const[currentQuestion,setCurrentQuestion]=useState(0);
    const {currentUser}=useAuth();
    const navigate= useNavigate();
    useEffect(()=>{
        dispatch({
            type:"questions",
            value: questionList
        })
    },[questionList]);

    const changeHandel=(e,index)=>{
        dispatch({
            type:"answers",
            questionId: currentQuestion,
            optionIndex:index,
            value: e.target.checked 
        })
    }

    const goNext=()=>{
        if(currentQuestion+1 < qna.length)
        {
            setCurrentQuestion((pre)=>pre+1);
        }
    }

    const goPrevious=()=>{
        if(currentQuestion>0)
        {
            setCurrentQuestion((pre)=>pre-1);
        }
    }

    const percentage = questionList.length > 0 ? ((currentQuestion + 1) / questionList.length) * 100 : 0;

    async function submit(){

        const {uid}=currentUser;
        const db=getDatabase();
        const resultRef=ref(db,`result/${uid}`);
        await set(resultRef,{
            [id]:qna
        })

        navigate(`/result/${id}`,{
            state:{qna}
        });

    }

    return(
        <>
            {loading && <div>Loading....</div>}
            {error &&  <div className="error">{error}</div>}
            { !loading && ! error && qna && qna.length>0 &&
                (<>
                    <p className={classes.question}>{qna[currentQuestion].title}</p>
                    <p className="instruction">Question can have multiple answers</p>
                    <Shadow />
                    <Answers input options={qna[currentQuestion].options} changeHandle={changeHandel}/>
                    <ProgressBar percentage={percentage} goNext={goNext} goPrev={goPrevious} submit={submit}  />
                    <MiniPlayer videoId={id} title={location.state}/>
                </>)            
            }
        </>
    )
}
