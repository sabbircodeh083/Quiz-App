import { getDatabase, orderByKey, query, ref,get } from "firebase/database";
import { useEffect, useState } from "react";


export default function useAnswerList(videoId){
    const[loading,setLoading]=useState(true);
    const[answerList,setAnswerList]=useState([]);
    const[error,setError]=useState("");

    useEffect(()=>{
        async function fatchAnswer(){
            const db= getDatabase();
            const answerRef=ref(db,"answers/"+videoId+"/questions");
            const answerQueary= query(
                answerRef,
                orderByKey()
            )

            try{
                setError("");
                setLoading(true);
                const snapShot= await get(answerQueary);
                setLoading(false);


                if(snapShot.exists()){
                setAnswerList((pre)=>([...pre, ...Object.values(snapShot.val())]));

            }
            }catch(err){
                console.log(err.message);
                setLoading(false);
                setError(` answer is not found!${err.message}`);
            }
        }

        fatchAnswer();
    },[videoId]);

    return{
        answerList,
        loading,
        error
    }
}