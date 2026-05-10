import React, { useContext, useEffect, useState } from "react";
import "../../firebase";
import { getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut} from "firebase/auth";

const AuthContext=React.createContext();


export function useAuth(){
    const value=useContext(AuthContext);
    return value;
}

export function AuthProvider({children}){
    const[loading,setLoading]=useState(true);
    const[currentUser,setCurrentUser]=useState();

    useEffect(()=>{
        const auth=getAuth();
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    },[]);

    async function Signup(email,password,userName){
        const auth= getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        //update profile
        await updateProfile(auth.currentUser,{
            displayName: userName
        })

        await auth.currentUser.reload();
    }

    function Login(email,password){
        const auth= getAuth();
        return signInWithEmailAndPassword(auth,email,password);
    }

    function Logout(){
        const auth= getAuth();
        return signOut(auth);

    }

    const value={
        currentUser,
        Signup,
        Login,
        Logout
    }

    return(
        <>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </>
    )
}