import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Home() {
  
  return (
    <AppBar position="static" style={{ background: '#040400' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box
        component="img"
        sx={{
          height: 40,
          width: 40,
          mr: 1,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="./logo-gold.png"
      />        
        <Typography
            variant="p"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >         
          </Typography>
   
        </Toolbar>
      </Container>
    </AppBar>
  );

}
export default Home;