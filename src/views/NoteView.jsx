
import Typography from '@mui/material/Typography';
import { Grid, IconButton} from '@mui/material';
import { NotesJournal } from '../journal';

import EditNoteIcon from '@mui/icons-material/EditNote';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import { useUiStore } from '../hooks/useUiStore';
import { AddNotesButton } from '../journal/components/AddNotesButton';
import { useJournalStore } from '../hooks/useJournalStore';


const sx={
  color: 'white',
  backgroundColor: 'info.main',
  ':hover': { backgroundColor: 'info.main', opacity: 0.9 },
  position: 'fixed',
  right: 50,
  bottom: 50
}; 

export const NoteView = () => {

const {notes}=useJournalStore();
  return (

    <Grid
      container
      spacing={0}
      sx={{padding:4}}
    >

      <Grid item xs={12}>
        <Typography variant='h6' textAlign='center' sx={{marginBottom:2, fontFamily:'Reenie Beanie', fontSize:40, fontWeight:'bold'}}>Mis Notas</Typography>
      </Grid>

      <Grid container spacing={2}>
          {
          notes.map(note => (
            <Grid item xs={12} sm={6} md={3} key={note.id}>
                <NotesJournal note={note}/>
            </Grid>
            
          ))
        }
      </Grid>

        <AddNotesButton size="large" sx={sx}>
            <NoteAddRoundedIcon sx={{fontSize:30}}/>
        </AddNotesButton>
    </Grid>
  )
}
