
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, IconButton, TextField } from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useJournalStore, useUiStore, useForm } from '../../hooks';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#cfc',
    p: 2,

};

export const NotesModal = () => {

    const { isDateModalOpen, closeDateModal } = useUiStore();
    const { title, body, onInputChange, setFormState, formState } = useForm({ title: '', body: '' });
    const { creating, startNewNote, startUpdateNote, note, startActiveNote } = useJournalStore();

    const onSavingNote = async () => {


        if (creating) {
            await startNewNote({ title, body });
            closeDateModal();
            return;
        }

        await startUpdateNote();
        closeDateModal();
    }

    useEffect(() => {
        startActiveNote({ ...note, ...formState });
    }, [formState])



    return (
        <div>

            <Modal
                open={isDateModalOpen}
                onClose={closeDateModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
                        <Grid item sx={{ width: '100%' }}>
                            <Typography
                                fontSize={39}
                                fontWeight='bold'
                                sx={{ width: '100%' }}
                            >28 de Agosto</Typography>

                            <Box
                                sx={{ display: 'flex', justifyContent: 'end' }}
                            >


                                <IconButton
                                    size='small'
                                    sx={{ color: 'green' }}
                                    onClick={onSavingNote}
                                >
                                    <CheckCircleIcon sx={{ fontSize: 30 }} />
                                </IconButton>

                            </Box>


                        </Grid>


                        <Grid container>
                            <TextField
                                type="text"
                                variant="outlined"
                                fullWidth
                                placeholder="Ingrese un título"
                                label="Título"
                                name='title'
                                value={title}
                                onChange={onInputChange}
                                sx={{ border: 0, mb: 1 }}
                            />

                            <TextField
                                type="text"
                                variant="outlined"
                                fullWidth
                                multiline
                                placeholder="¿Qué sucedió en el día de hoy?"
                                name='body'
                                value={body}
                                onChange={onInputChange}
                                minRows={5}
                            />

                        </Grid>




                        {/* Image gallery */}


                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
