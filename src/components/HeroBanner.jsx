import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import BannerLogo from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: "212px", xs: "70px"},
      ml: {sm: "50px"}
    }}>
        <Typography color="secondary" fontSize="30px" fontWeight="bold"
        position="relative" p="20px">
          Fitness Club
        </Typography>
        <Typography fontWeight="semibold" p="0 20px" mb={3}
        sx={{fontSize: {lg: "20px", xs: "15px"}}}>
          Transform Your Body, <br /> Transform Your Life: Get Moving with Us!
        </Typography>
        <Button variant= "contained" color='secondary' style={{margin: '0 20px', padding: '12px 8px'}}>
          Explore Exercises
        </Button>
        <Typography fontSize="200px" fontWeight={600} color='secondary'
        sx={{opacity: 0.1, display: {lg: "block", xs: "none"}}}>
          Exercises
        </Typography>
        <img src={BannerLogo} alt="bannerLogo" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner