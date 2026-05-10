import classes from "../style/illustration.module.css";

export default function Illustration({src,alt}){
    return(
        <>
            <div className={classes.illustration}>
                <img src={src} alt={alt} />
            </div>
        </>
    )
}