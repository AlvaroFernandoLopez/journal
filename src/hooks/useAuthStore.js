import { useDispatch, useSelector } from "react-redux"
import { createWithEmailAndPAssword, loginWithEmailPassword, logoutFirebase } from "../firebase/providers";
import { onChecking, onLogin, onLogout } from "../store/auth";
import { clearNotesLogout } from "../store/journal/journalSlice";
export const useAuthStore = () => {

    const dispatch =useDispatch();

    const { status, uid, displayName}= useSelector(state=>state.auth);
  


    const startCreateWithEmailPassword=async({firstName,lastName, email, password})=>{

      dispatch(onChecking());
      const displayName=firstName + ' ' + lastName;
      const resp= await createWithEmailAndPAssword({displayName, email ,password});

      if(!resp.ok) return dispatch(onLogout(resp.errorMessage));

      dispatch(onLogin(resp));
    }

    const startLoginWithEmailPassword=async({email, password})=>{

      dispatch(onChecking());
      const resp=  await loginWithEmailPassword({email, password});
 
       if(!resp.ok) return dispatch(onLogout(resp));
       dispatch(onLogin(resp));
    }


    const startLogout= async()=>{
      
      await logoutFirebase();
       dispatch(onLogout());
       dispatch(clearNotesLogout())
    }

    

  return {
    startLoginWithEmailPassword,
    startCreateWithEmailPassword,
    startLogout,
  
    status,
    uid,
    displayName

  }
}
