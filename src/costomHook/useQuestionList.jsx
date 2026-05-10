import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";


export  function useQuestionList(videoID){
    const [questionList,setQuestionList]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error,setError]=useState("");
    useEffect(()=>{
      
      async function fetchQuestions(){
        const db= getDatabase();
        const quizRef= ref(db,"quiz/"+ videoID + "/questions");
        const quizQueary= query(
            quizRef,
            orderByKey()
        )

        try{
            setError("");
            setLoading(true);
            const snapShot= await get(quizQueary);
            setLoading(false);
        

            if(snapShot.exists()){
                setQuestionList((previous)=>{
                    return [...previous, ...Object.values(snapShot.val())];
                })
            }
        }catch(err){
            setLoading(false);
            console.log(err.message);
            setError("No data found !");
        }
      }

      fetchQuestions();
    },[videoID]);

    return {
        questionList,
        loading,
        error
    }


}