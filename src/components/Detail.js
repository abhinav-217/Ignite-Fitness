import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import { useState } from 'react';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  {console.log(exerciseDetail)}
  const [buttonText, setButtonText] = useState("Save")
  const { bodyPart, gifUrl, name, target, equipment,id } = exerciseDetail;
  const addToSave = ()=>{
    let savedExercise = JSON.parse(localStorage.getItem("savedExercise")) || [];
    let userExercise = {
      bodyPart:bodyPart,
      gifUrl:gifUrl,
      name:name,
      target:target,
      equipment:equipment,
      id:id
    }
    if(savedExercise.length==0)
    {
      savedExercise.push(userExercise)
      localStorage.setItem("savedExercise",JSON.stringify(savedExercise));
      setButtonText("Saved...")
    }
    else
    {
      // console.log(savedExercise)
      let check = false;
      let idx = -1;
      for(let i = 0;i<savedExercise.length;i++)
      {
        if(savedExercise[i].name == userExercise.name)
        {
          check = true;
          setButtonText("Saved...")
          break;
        }
        else{
          idx = Math.max(idx,savedExercise[i].id);
        }
      }
      if(check == false)
      {
        savedExercise.push(userExercise);
        localStorage.setItem("savedExercise",JSON.stringify(savedExercise));
        setButtonText("Saved...")
      }
    }
  }
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
          <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '40px', position: 'absolute', right: '5vw',top:{ lg: '10vh', xs: '20vh' }, fontSize: { lg: '20px', xs: '14px' } }} onClick={addToSave}>
          {buttonText}
        </Button>
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
          of the best <br /> exercises to target your {target}.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
