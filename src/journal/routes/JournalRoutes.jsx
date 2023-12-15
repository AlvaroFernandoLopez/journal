import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"
import { NoteSelected } from "../../views"


export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<JournalPage/>}/>
        {/* <Route path="/notes" element={<NoteSelected/>}/> */}
        <Route path="/*" element={<Navigate to="/"/>}/> 
    </Routes>
  )
}

