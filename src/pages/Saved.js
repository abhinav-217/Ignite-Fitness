import React from 'react'
import { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import ExerciseCard from '../components/ExerciseCard'
import { Box, Stack, Typography, Button } from '@mui/material';
const refresh = () => {
    getsavedExercise();
}
const Saved = () => {
    const [saved, setsaved] = useState([])
    const getsavedExercise = () => {
        const savedExercise = JSON.parse(localStorage.getItem("savedExercise"))||[];
        setsaved(savedExercise);
    }
    useEffect(() => {
        getsavedExercise();
    }, [])
    if (!saved.length) return (
        <div>
        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { lg: '20px', xs: '10px' } }} mx="10vw" mt="46px">Seem's like there is nothing</Typography>
            <Loader />
        </div>
    )
    return (
        <div>
            <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
                <Button className="search-btn" sx={{ bgcolor: '#FF2625', borderRadius: "50%", color: '#fff', textTransform: 'none', width: { lg: '120px', xs: '50px' }, height: '40px', position: 'absolute', right: '5vw', top: { lg: '10vh', xs: '20vh' }, fontSize: { lg: '20px', xs: '14px' } }} onClick={refresh}>
                    Refresh
                </Button>
                <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Your Saved Collection</Typography>
                <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                    {saved.map((exercise, idx) => (
                        <ExerciseCard key={idx} exercise={exercise} />
                    ))}
                </Stack>
            </Box>
        </div>
    )
}

export default Saved
