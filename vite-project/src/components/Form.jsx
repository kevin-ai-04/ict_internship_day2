import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Form = () => {
  return (
  <>
    <div id="formcard">
      <h2>Registration Form</h2>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ><div>
      <p>Name:</p>
    <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue=""
    /></div>
    <div>
      <p>Department:</p>
    <TextField
      required
      id="outlined-required"
      label="Required"
      placeholder="Department"
      defaultValue=""
    /></div><div>
    <p>Semester:</p>
  <TextField
    required
    id="outlined-required"
    label="Semester"
    defaultValue=" "
  /></div></Box>
      <div>
        
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Submit</Button>
    </Stack>
      </div>
    </div>
  </>
  )
}

export default Form