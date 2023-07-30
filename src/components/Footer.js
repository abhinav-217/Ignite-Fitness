import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useState,useEffect } from 'react';
import Logo from '../assets/images/Logo-1.png';
import { quotes } from '../constants/quotes';

const Footer = () => {
  const loadQuote = ()=>{
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setquote(randomQuote);
    // console.log(randomQuote)
  }
  const [quote, setquote] = useState("");
  useEffect(() => {
    loadQuote();
  }, [])
  return(
    <Box mt="40vh" bgcolor="#8441479c">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="35px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" color="#FFFFFF" pb="40px">{quote}🔥 </Typography>
  </Box>
  )
};

export default Footer;
