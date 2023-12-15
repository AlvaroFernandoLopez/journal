import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, deleteUser} from 'firebase/auth';
import { FirebaseAuth } from './config';



export const createWithEmailAndPAssword=async({displayName, email, password})=>{

    try {

      const {user}= await createUserWithEmailAndPassword(FirebaseAuth, email, password);

      const {uid, photoURL}=user;
      await updateProfile( FirebaseAuth.currentUser, { displayName });
        
     
      return {
        ok:true,
        displayName,
        uid,
        email, 
        photoURL
      }
        
    } catch (error) {
    
        const errorMessage= error.message;
        return{
            ok:false,
            errorMessage
        }
    }
}

export const loginWithEmailPassword = async({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;
        
        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}


export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}

export const deleteAcountFirebase= async()=>{
    const user = FirebaseAuth.currentUser;
    await deleteUser(user);
    
}