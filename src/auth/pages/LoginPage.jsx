
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { AuthLayout } from '../';
import { useAuthStore, useForm } from '../../hooks';



export const LoginPage = () => {
  
  const dispatch=useDispatch();

  const {startLoginWithEmailPassword}=useAuthStore();

  const {onInputChange,email,password,isFormValid}=useForm({
    email:'',
    password:''
  });

  const handleSubmit=(e)=>{
    e.preventDefault();
   startLoginWithEmailPassword({email, password})
  }

 
 
  return (
    
      <AuthLayout title='Sign in'>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={onInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={onInputChange}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
             
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link component={RouterLink} variant="body2" to="/auth/register">
                  Forgot password?
                </Link>  */}
              </Grid>
              <Grid item>
              <Link component={RouterLink} variant="body2" to="/auth/register">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
      </AuthLayout>
          
    
  );
}