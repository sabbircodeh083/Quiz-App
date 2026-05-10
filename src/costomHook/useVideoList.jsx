import { useEffect, useState } from "react";
import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";



export  function useVideoList(page){
    const[videos,setVideos]=useState([]);
    const[loading, setLoading]=useState(true);
    const[error,setError]=useState("");
    const[hasMore, setHasMore]=useState(false);

    useEffect(()=>{
        async function fetchVideos(){
            const db = getDatabase();
            const videosRef=ref(db,"videos");
            const videoQueary= query(
                videosRef,
                orderByKey(),
                startAt(""+page),
                limitToFirst(8)
            );

            try{
                setError("");
                setLoading(true);
                const snapShot= await get(videoQueary);
                setLoading(false);
                if(snapShot.exists()){
                    setHasMore(true);
                    setVideos((previous)=>
                    {
                        return [...previous, ...Object.values(snapShot.val())];
                    })
                }
                else{
                    setHasMore(false);
                }
            }catch(err){
                setLoading(false);
                setError(err.message);
                console.log(err.message);
            }
        }
        fetchVideos();
    },[page]);

    return{
        videos,
        loading,
        error,
        hasMore
    };
}