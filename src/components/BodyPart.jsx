import React from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = () => {
  return (
    <Stack
      type='button'
      justifyContent='center'
      alignItems='center'
      className='bodyPart-card'
      sx={
        bodyPart === item ? { 
          borderTop: '4px solid #FF2625', 
          background: '#fff', 
          borderBottomLeftRadius: '20px', 
          width: '270px', 
          height: '282px', 
          cursor: 'pointer', 
          gap: '47px' 
        } : { 
          background: '#fff', 
          borderBottomLeftRadius: '20px', 
          width: '270px', 
          height: '282px', 
          cursor: 'pointer', 
          gap: '47px' }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt="dumbbell" style={{width: '40px', height: '40px'}}/>
    </Stack>
  )
}

export default BodyPart