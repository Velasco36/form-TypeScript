import React, { FC } from 'react';
import {Box, Button, Container,Grid, Paper, TextField, Typography} from "@mui/material"

export interface formularioProps {
  height: number;
}
const formulario: FC<formularioProps> = () => {
  return (
    <Container maxWidth="sm">
      <Grid 
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{minHeight: "100vh"}}
        
      
      > 
        <Grid item>
          <Paper sx={{padding: "1.2em", borderRadius: "0.5em"}}>
            <Typography 
            variant="h4"
            textAlign="center"
            sx={{mt:1, mb:1.5}}
            >
              Formulario 
            </Typography>
            <Box component="form">
              <TextField 
              fullWidth 
              type='text'
              label="Name" 
              sx={{mt:2, mb:1.5}}
              required
              />
              <TextField 
              fullWidth 
              type='text'
              label="Lastname" 
              sx={{mt:2, mb:1.5}}
              required
              />
              <TextField 
              fullWidth 
              type='text'
              label="address" 
              sx={{mt:2, mb:1.5}}
              
              />
                <TextField 
              fullWidth 
              type='tel'
              label="Phone" 
              sx={{mt:2, mb:1.5}}
              required
              />
              <TextField 
              margin='normal'
              fullWidth              
              type='email' 
              label="email" 
              sx={{mt:2, mb:1.5}}
              required
              /> 
              <TextField 
              fullWidth 
              type='password'
              label="password" 
              sx={{mt:2, mb:1.5}}
              required
              />
              <Button 
              fullWidth 
              type="submit"
              variant='contained'
              sx={{mt:1.5, mb: 3}}
              
              
              >
                Procesar
              </Button> 
            </Box>            
           </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default formulario;