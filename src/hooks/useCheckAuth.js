import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { onLogin, onLogout } from "../store/auth";
import { useJournalStore, useAuthStore } from "./";



export const useCheckAuth = () => {
  

    const {status}=useAuthStore();
    const dispatch= useDispatch();
   const {startLoadingNotes}=useJournalStore();
    
  
    useEffect(() => {
        
        onAuthStateChanged( FirebaseAuth, async( user ) => {
        if ( !user ) return dispatch( onLogout() );

        const { uid, email, displayName, photoURL } = user;
        dispatch( onLogin({ uid, email, displayName, photoURL }) );
        startLoadingNotes(uid);
        })
    }, []);
    
    return status;
}
