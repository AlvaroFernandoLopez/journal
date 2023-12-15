import { useDispatch, useSelector } from "react-redux"
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from "../helpers/fileUpload";
import moment from 'moment';
import { 
  creatingNote,
  editingnote,
  savingNewNote, 
  addNewNote, 
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  openNotesView,
  closeNotesView, 
  setPhotosToActiveNote,
  activeImg,
deleteImgUrlsById} from "../store/journal/journalSlice";

moment.locale('es');
export const useJournalStore = () => {

const dispatch=useDispatch();
const {creating ,notes, active:note , isOpenNote, imageUrls, isSaving, urlActive}=useSelector(state=>state.journal);
const {uid}=useSelector(state=>state.auth);


const initCreatingNote=()=>{
  dispatch(creatingNote());
  console.log(uid)
}

const initEditingNote=(note)=>{
  dispatch(editingnote(note));
}

 const startNewNote = async({title, body}) => {
  
      dispatch( savingNewNote() );
      
      const fechaActual = moment().format('MMMM Do YYYY');
      
      const newNote = {
          title,
          body,
          date: fechaActual,
          imageUrls:[],
          urlActive:''
         
      }

      if(title.length<=0){
        throw new Error('no hay titulo')
    }
    try {
      const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`) );
      await setDoc( newDoc, newNote );

      newNote.id = newDoc.id;  
      dispatch( addNewNote( newNote ) );
      dispatch( setActiveNote( newNote ) );
    } catch (error) {
      console.log(error)
    }
      

  
}

 const startLoadingNotes = async(uid) => {
  
      if ( !uid ) throw new Error('El UID del usuario no existe');
      const notes = await loadNotes( uid );
      dispatch( setNotes( notes ) );
  
}

const startUpdateNote = async() => {

  console.log(note)
      dispatch( setSaving() );

      const noteToFireStore = { ...note };
      delete noteToFireStore.id;
  
      const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
      await setDoc( docRef, noteToFireStore, { merge: true });

      dispatch( updateNote( note ) );

}

const startActiveNote=(note)=>{
  dispatch(setActiveNote(note));
}

const startDeletingNote = async(note) => {
 
 
      const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
      await deleteDoc( docRef );

      dispatch( deleteNoteById(note.id) );
}


const onOpenNoteView=()=>{
  dispatch(openNotesView());
}

const onCloseNoteView=()=>{
  dispatch(closeNotesView());
}

 const startUploadingFiles = async( files = [] ) => {

      dispatch( setSaving() );
          
      // await fileUpload( files[0] );
      const fileUploadPromises = [];
      for ( const file of files ) {
          fileUploadPromises.push( fileUpload( file ) )
      }

      const photosUrls = await Promise.all( fileUploadPromises );
      
      dispatch( setPhotosToActiveNote( photosUrls ));
   
      
}

const startDeletingImgUrls=(img)=>{
  //Todo: Borrar de cloudinay
  dispatch(deleteImgUrlsById(img));
}

const startActiveImg=(img)=>{
  dispatch(activeImg(img));
}
  return {
    initCreatingNote,
    initEditingNote,
    startNewNote,
    startLoadingNotes,
    startUpdateNote,
    startActiveNote,
    startDeletingNote,
    onOpenNoteView,
    onCloseNoteView,
    startUploadingFiles,
    startDeletingImgUrls,
    startActiveImg,
    /**Propiedades */
    creating,
    notes,
    note,
    isOpenNote,
    imageUrls,
    isSaving,
    urlActive
    
  }
}

  


