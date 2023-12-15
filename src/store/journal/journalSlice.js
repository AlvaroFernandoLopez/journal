

import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        creating:false,
        isOpenNote:false,
        urlActive:''
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
          //   urlActive:''
        // }
    },
    reducers: {
        creatingNote: (state, /* action */ ) => {
            state.creating =true;
            state.active=null;
        },

        editingnote:(state,{payload})=>{
            state.creating=false;
            state.active=payload;
        },
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewNote: (state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setSaving: (state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        setActiveNote: (state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, {payload} ) => {  
            state.notes = payload;
        },
        updateNote: (state, action ) => { // payload: note
            console.log(action.payload)
            state.isSaving = false;
            state.notes = state.notes.map( note => {

                if ( note.id === action.payload.id ) {
                    return action.payload;
                }

                return note;
            });

            state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
        },

        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ]; 
            state.isSaving = false;
        },

        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
            state.isOpenNote=false;
        },

        deleteNoteById: (state, action ) => {
            
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== action.payload );
        },

        activeImg:(state, {payload})=>{
            state.urlActive=payload;
        },
        deleteImgUrlsById:(state, {payload})=>{
            state.active.urlActive='';
            state.active.imageUrls=state.active.imageUrls.filter(img=>img !== payload);
        },

        openNotesView:(state)=>{
            state.isOpenNote=true;
        },
        closeNotesView:(state)=>{
            state.isOpenNote=false;
            state.active=null;
            
        },

    }
});


// Action creators are generated for each case reducer function
export const { 
    creatingNote, 
    editingnote,
    savingNewNote,
    addNewNote,
    setActiveNote,
    setNotes,
    updateNote,
    setSaving,
    deleteNoteById,
    openNotesView, 
    closeNotesView,
    setPhotosToActiveNote,
    clearNotesLogout,
    deleteImgUrlsById,
    activeImg
} = journalSlice.actions;