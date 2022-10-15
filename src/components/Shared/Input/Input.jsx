import React from 'react'
import { TextField } from '@mui/material'


function Input(props) {
  const {data} = props
  return (
    <div className='Input'>
      <TextField 
      id="outlined-basic" 
      label={data.label}
      variant="outlined"
      type='email'
      />
    </div>
  )
}

export default Input