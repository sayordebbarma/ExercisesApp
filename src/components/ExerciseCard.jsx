import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Stack, Button } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Stack direction='row'>
            <Button sx={{ml: '21px', color: '#fff', background: '#ffa9a9', fontSize: '14px', borderRadius: '20px', texttransform: 'capitalize'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ml: '21px', color: '#fff', background: '#ffa9a9', fontSize: '14px', borderRadius: '20px', texttransform: 'capitalize'}}>
                {exercise.target}
            </Button>
            <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
                {exercise.name}
            </Typography>
        </Stack>
    </Link>
  )
}

export default ExerciseCard