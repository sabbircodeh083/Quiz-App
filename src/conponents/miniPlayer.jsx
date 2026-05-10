import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import classes from "../style/miniplayer.module.css";

export default function MiniPlayer({ videoId, title }) {

    const [playing, setPlaying] = useState(false);

    const miniPlayerRef = useRef();

    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    const openMiniPlayer = () => {

        miniPlayerRef.current.classList.remove(classes.floatingBtn);

        setPlaying(true);
    };

    const closeMiniPlayer = () => {

        miniPlayerRef.current.classList.add(classes.floatingBtn);

        setPlaying(false);
    };

    return (
        <div
            ref={miniPlayerRef}
            className={`${classes.miniPlayer} ${classes.floatingBtn}`}
        >

            {/* Open Button */}
            <span
                className={`material-symbols-outlined ${classes.open}`}
                onClick={openMiniPlayer}
            >
                play_circle
            </span>

            {/* Close Button */}
            <span
                className={`material-symbols-outlined ${classes.close}`}
                onClick={closeMiniPlayer}
            >
                close
            </span>

            {/* Video */}
            <div className={classes.playerWrapper}>
                <ReactPlayer
                    className={classes.player}
                    src={videoUrl}
                    width="100%"
                    height="100%"
                    playing={playing}
                    controls
                />
            </div>

            {/* Title */}
            <p>{title}</p>

        </div>
    );
}