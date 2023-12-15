

import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {
        onOpenModal: (state, /* action */ ) => {
            state.isDateModalOpen= true;
        },

        onCloseModal:(state)=>{
            state.isDateModalOpen=false
        }
    }
});


// Action creators are generated for each case reducer function
export const { onOpenModal, onCloseModal } = uiSlice.actions;