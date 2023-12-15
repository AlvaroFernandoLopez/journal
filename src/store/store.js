
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { uiSlice } from './ui/uiSlice'
import { journalSlice } from './journal/journalSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    journal: journalSlice.reducer
  },
})