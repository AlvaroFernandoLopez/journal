import { Box, Toolbar } from "@mui/material"
import { Navbar } from "../components"


export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>

     <Navbar/>

     <Box 
            component='main'
            sx={{ flexGrow: 1, p: 0}}
        >
            <Toolbar />

            { children }
            
        </Box>
    </Box>
  )
}
