
import { IconButton } from "@mui/material"
import { useUiStore, useJournalStore} from "../../hooks";


export const AddNotesButton = ({size='', sx={}, children}) => {

 
  const {openDateModal}= useUiStore();
  const {initCreatingNote}=useJournalStore();

  const onClickNewNote = () => {
    
       initCreatingNote();
       openDateModal();
  }

  return (
    <IconButton
      size={size}
      color="warning"
      sx={sx}
      onClick={onClickNewNote}
    >

      {children}
      
    </IconButton>
  )
}
