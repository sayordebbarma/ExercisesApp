import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData'

const SearchExercises = () => {
  const [search, setSearch] = useState('')

  const handleSearch = async() => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      console.log(exercisesData);  //55:00 resume
    }
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} textAlign="center" mb="50px"
      sx={{fontSize: {lg: "44px", xs: "30px"}}}>
        Find the best <br /> Exercises here
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontweight: "700",
              border: "none",
              borderradius: "4px"
            },
            width: {
              lg: "800px", xs: "350px"
            },
            backgroundColor: "#fff",
            borderRadius: "10px 20px"
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />
        <Button className='search-btn'
          sx={{
            bgcolor: "#9D27B0",
            color: "#fff",
            textTransform: "none",
            height: "56px",
            width: {lg: "175px", xs: "80px"},
            fontSize: {lg: "20px", xs: "14px"}, 
            position: "absolute",
            right: "0",
            borderRadius: "10px 20px" 
          }}
          onClick={handleSearch}  
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises