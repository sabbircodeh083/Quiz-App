import { useState } from "react";
import { useVideoList } from "../costomHook/useVideoList";
import classes from "../style/videos.module.css";
import Video from "./video";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Videos(){
    const[page,setPage]=useState(1);
    const {videos,error,loading,hasMore}=useVideoList(page);
    return(
        <>
            <div>
                {videos.length>0 && (

                    <InfiniteScroll className={classes.videos} 
                        dataLength={videos.length} 
                        hasMore={hasMore} 
                        next={()=> setPage((previous)=> previous+8)}  
                        loader={<p>Loading...</p>}
                        endMessage={<p style={{ display: "grid" ,gridTemplateColumns: "1ref", textAlign: 'center' }}>All items loaded.</p>}>
                        {
                            videos.map((video)=>(
                            <Video 
                                key={video.youtubeID}
                                title={video.title} 
                                noq={video.noq} 
                                id={video.youtubeID}
                            />  ))
                        }
                    </InfiniteScroll>

                )}

                {
                    !loading && videos.length===0 && 
                    <div className="error"> No data found ! {error}</div>
                }
            </div>
        </>
    )
}