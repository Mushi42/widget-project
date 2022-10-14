import React from 'react'
import { TextField } from '@mui/material'


function Input(props) {
  const label = props
  return (
    <div className='Input'>
      <TextField 
      id="outlined-basic" 
      label='Sign Up' 
      variant="outlined" 
      borderRadius={10}
      type='email'
      />
    </div>
  )
}

export default Input