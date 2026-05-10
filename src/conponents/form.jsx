import Classes from "../style/form.module.css";


export default function Form({children,...rest}){
    return(
        <>
            <form className={Classes.form} {...rest} >
                {children}
            </form>
        </>
    )
}