import { Box, Grid, IconButton, Typography } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

import './notesStyles.css'
import { useJournalStore } from '../../hooks';
import{ EditNoteButton } from './';


export const NotesJournal = ({note}) => {
const {startDeletingNote, onOpenNoteView, startActiveNote}= useJournalStore();


const deleteNote=()=>{
  startDeletingNote(note);
}
const handleClick=()=>{
  startActiveNote(note);
}

const handleDoubleClick=()=>{
  startActiveNote(note);
  onOpenNoteView();
}

  return (
    <Box 
      component='div'
      className='notes'
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
      >
        <Typography component='p' variant='h4' align='center'>{note.title}</Typography>
        <Typography
        component='p'
        variant='h6'
          sx={{overflow:'hidden'}}
        >
          {note.body}
           </Typography>

       <Box 
          component='div' 
          className='view'
          sx={{
            display:'flex',
            justifyContent:'center'
          }}
          >

       <EditNoteButton />

      {/* <EditNoteButton  /> */}
      <IconButton
        size='small'
        onClick={deleteNote}
      >
        <DeleteIcon sx={{fontSize:30}}/>
      </IconButton>
       </Box>
    </Box>
  )
}
