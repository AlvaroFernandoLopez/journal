import { Navigate, Route, Routes } from "react-router-dom"
import { JournalRoutes } from "../journal"
import { AuthRoutes } from "../auth"
import { useSelector } from "react-redux"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { CheckingAuth } from "../ui/components/CheckingAuth"




export const AppRouter = () => {
  
  const status=useCheckAuth();

  if(status==='checking'){
    return <CheckingAuth/>
  }

  return (
    <Routes>
      {
          (status==='authenticated')
          ?<Route path="/*" element={<JournalRoutes/>}/> 
          :<Route path="/auth/*" element={<AuthRoutes/>}/>   
      }
         <Route path='/*' element={ <Navigate to='/auth/login' />  } />
    </Routes>
  )
}
