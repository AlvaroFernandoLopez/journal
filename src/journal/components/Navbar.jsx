
import { Box, Grid, IconButton,  Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { LogoutOutlined } from '@mui/icons-material';
import { useAuthStore } from '../../hooks';


export const Navbar = () => {

    const { startLogout } = useAuthStore();

    const logout = () => {
        startLogout();
    }
    return (

        <AppBar
            position='fixed'
            sx={{
                width: '100%',
                backgroundColor: 'secondary.main'
            }

            }
        >

            <Toolbar>

                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >

                </IconButton>



                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'> Journal </Typography>

                    <Box display='flex' alignItems='center'>
                        
                        <IconButton
                            color='inherit'
                            size='large'
                            onClick={logout}
                        >
                            <LogoutOutlined sx={{ fontSize: 30 }} />
                        </IconButton>

                    </Box>


                </Grid>
            </Toolbar>


        </AppBar>
    )
}
