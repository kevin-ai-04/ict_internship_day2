import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Form = () => {
  return (
  <>
    <div id="formcard">
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ><div>
      <p>Name</p>
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
    notrequired
    id="outlined-required"
    label="Values from 1 to 8"
    defaultValue="Hello World"
  /></div></Box>

      <label htmlFor='name'>Name:</label>
      <input class="inputfield" id="name" type='text'></input>
      <label htmlFor="department">Department:</label>
      <input class="inputfield" id="department" type='text'></input>
      <label htmlFor="semester">Semester (1 to 8):</label>
      <input class="inputfield" id="semester" type='number'></input>
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