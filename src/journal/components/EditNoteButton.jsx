import { IconButton } from "@mui/material"
import EditNoteIcon from '@mui/icons-material/EditNote';

import { useUiStore, useJournalStore  } from "../../hooks";


export const EditNoteButton = () => {
 
  const {openDateModal}=useUiStore();
  const {initEditingNote, note}=useJournalStore(); 

  
  const handleEditNote=()=>{
    
    initEditingNote(note);
    openDateModal();
  }
  return (
    <IconButton
    size='small'
    onClick={handleEditNote}
  >
    <EditNoteIcon sx={{fontSize:30}}/>
  </IconButton>
  )
}
