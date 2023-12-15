import { Box, IconButton, Button, ImageList, ImageListItem, Typography, Grid } from "@mui/material"
import EditNoteIcon from '@mui/icons-material/EditNote';
import { ImagesGallery } from "../journal";

import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { EditNoteButton } from "../journal/components/EditNoteButton";
import { CloudNotesButton } from "../journal/components/CloudNotesButton";
import { useJournalStore } from "../hooks/useJournalStore";
import { useEffect, useMemo, useState } from "react";
import { findNoteById } from "../helpers/findNoteById";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export const NoteSelected = () => {
  const { onCloseNoteView,
    note,
    startUpdateNote,
    notes,
    startDeletingImgUrls,
    isSaving,
    urlActive,

    startActiveImg
  } = useJournalStore();

  const [displ, setdispl] = useState('none')
  const noteViews = findNoteById(note.id);
  // const noteViews={title:'Goku', body:'Body', imageUrls:['https://res.cloudinary.com/proyectos-react/image/upload/v1701962476/journal/ysrnegw6zbc1epgjahmz.png']}
  const {date } = note;
  const noteMemorize = useMemo(() => note, []);

  const logoutNoteSelected = () => {
    onCloseNoteView();

  }


  const onSavingChanges = async () => {
    await startUpdateNote(note);

  }

  const deleteImages = async () => {
    startDeletingImgUrls(urlActive);
    setdispl('none');

  }

  const pruebaSawl = () => {
    startActiveImg('');

    if (note !== noteMemorize) { //la nota fue modificada
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          startUpdateNote(note);
          onCloseNoteView();
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
          onCloseNoteView();
        }
      });
      return;
    }
    onCloseNoteView();




  }

  // const dateString = useMemo(() => {
  //   const newDate = new Date(date);
  //   return newDate.toDateString('es-ES');
  // }, [date])

const dateString = useMemo(() => {
  
    return date;
  }, [date]);

  useEffect(() => {
    if (!urlActive.length <= 0) {
      setdispl('block')
    } else {
      setdispl('none')
    }

  }, [urlActive]);




  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'

      sx={{
        minHeight: 'calc(100vh - 65px)',
        padding: 4
      }}
    >

      <Box
        component='div'

        sx={{
          minHeigh: '500px',
          width: '600px',
          backgroundColor: '#cfc',
          padding: 4,
          boxShadow: '5px 5px 7px rgba(33, 33, 33, 0.7)'

        }}
      >
        <Typography sx={{fontSize:25}}>{dateString}</Typography>
        <Typography textAlign='center' sx={{ fontSize: 40, fontWeight: 'bold' }}>{noteViews.title}</Typography>

        <Box
          sx={{

            overflow: 'auto'

          }}>
          <Typography fontSize={32} sx={{ width: '100%' }}>  {noteViews.body}</Typography>
        </Box>

        {
          (note.imageUrls.length <= 0) ? <></>
            : <ImagesGallery images={note.imageUrls} />

        }



        <Grid
          container
          alignItems='center'
          justifyContent='center'
          gap={2}
        >
          <Grid item>
            <EditNoteButton />
          </Grid>

          <Grid item>
            <CloudNotesButton />
          </Grid>

          <Grid item>
            <IconButton onClick={pruebaSawl}>
              <ReplyRoundedIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Grid>




          <Button
            onClick={deleteImages}
            variant="outlined"
            sx={{ display: `${displ}` }}
          >Borrar</Button>
        </Grid>
      </Box>

    </Box>
  )
}
