
import { Grid, Typography } from "@mui/material"

import { useAuthStore } from "../hooks/useAuthStore";
import { AddNotesButton } from "../journal/components/AddNotesButton";
import NoteAddIcon from '@mui/icons-material/NoteAddRounded';


export const NothingSelectedView  = () => {



  
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ 
        backgroundColor:'info.main',
        minHeight: 'calc(100vh - 65px)', 
      }}
    >
        <Grid item xs={ 12 }>
           <AddNotesButton >
              <NoteAddIcon sx={{ fontSize: 100, color:'#000'}} />
           </AddNotesButton>
        </Grid>
        <Grid item xs={ 12 }>
            <Typography 
                 variant='h5'
                 sx={{
                  color:'#f7f4f4'
                 }}
                 >
                No tienes notas aún, crea una nueva </Typography>
        </Grid>
    </Grid>
  )
}
