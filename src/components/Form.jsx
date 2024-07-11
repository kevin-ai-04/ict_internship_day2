import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useEffect, useState } from "react";

const Form = ({person}) => {
  // const [count, setCount] = useState(0);
  // let valueAdd=()=>{
  //   setCount(count+1)
  // }

  const [form,setForm] = useState(
    {
      fname:person.fname,
      department:person.department,
      semester:person.semeseter
    }
  )
  function valueCap(e)
  {
    setForm({...form,[e.target.name]:e.target.value})
    // console.log(e)
  }
  let valueAdd=()=>{
    console.log(form)
  }

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
    >
      
      <div>
      <p>Name:</p>
    <TextField
      required
      id="outlined-required"
      label="Required"
      // defaultValue=""
      name="fname"
      value={form.fname}
      onChange={valueCap}
    /></div>

    <div>
      <p>Department:</p>
    <TextField
      required
      id="outlined-required"
      label="Required"
      placeholder="Department"
      name="department"
      onChange={valueCap}
      value={form.department}
      defaultValue=""
    /></div>
    
    <div>  
    <p>Semester:</p>
  <TextField
    required
    id="outlined-required"
    label="Semester"
    defaultValue=" "
    name="semester" //do this for every text field, with same name declared earlier on top
    value={form.semester}
    onChange={valueCap}
  /></div></Box>
      <div>
        
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={valueAdd}>Submit</Button>
    </Stack>
    <br/>
    {/* <small>Count is {count}</small> */}
      </div>
    </div>
  </>
  )
}

export default Form