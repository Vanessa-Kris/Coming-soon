import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Subscribe() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="Name"
      />
      <TextField id="demo-helper-text-misaligned-no-helper" label="Name" />

      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />

    </Box>

    
  );
}

export default Subscribe;