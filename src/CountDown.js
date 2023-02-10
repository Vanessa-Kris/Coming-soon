import Countdown from 'react-countdown';
import Typography from '@mui/material/Typography';

function CountDown  ()  {
    return(
        <>
        <Typography
        align="center"
        variant="h1"
        noWrap
        sx={{
          mr: 1,
          display: { xs: 'block', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: '#fff',
          textDecoration: 'none',
        }}
      >
     
      <Countdown date={Date.now() + 1000 * 60 * 60 * 24} />
      </Typography>

    
    </>
    )
} 
 export default CountDown;