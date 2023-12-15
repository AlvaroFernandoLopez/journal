import {  useRef } from "react";
import { IconButton } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { useJournalStore } from "../../hooks";


export const CloudNotesButton = () => {
    const fileInputRef = useRef();
    const {startUploadingFiles}=useJournalStore();

  const onFileInputChange = async ({ target }) => {
   
    if( target.files === 0 ) return;
     await startUploadingFiles( target.files ) ;
     
}



    return (

        <>
            <input
                type="file"
                id="fileInput"
                multiple
                ref={fileInputRef}
                onChange={onFileInputChange}
                style={{ display: 'none' }}
            />
            <IconButton
                // disabled={ isSaving }
                onClick={() => fileInputRef.current.click()}

            >
                <CloudUploadIcon sx={{ fontSize: 30 }} />
            </IconButton>
        </>

    )
}
