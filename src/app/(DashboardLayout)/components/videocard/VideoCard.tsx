"use client"
import React from 'react'
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material'
import Image from 'next/image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function VideoCard({course}) {
    const [hover, setHover] = useState(false)
  return (
    <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            sx={{
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            '&:hover .hover-icon': {
                display: 'flex',
            },
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
    >
        <PlayArrowIcon
        className="hover-icon"
        sx={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          right:"1rem",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: hover ? 'flex' : 'none',
          alignItems: "center",
          justifyContent: "center",
          fontSize: "4rem",
          color: "white",
          padding: "1rem",
          width:"100%",
          height:"15.6rem"
        }} />

        <Image
          src={course.img}
          alt="img"
          style={{ height: "250px", borderRadius: "8px", width: "100%", objectFit:"cover" }}
        />
        <Typography variant="h4">{course.title}</Typography>
</Grid>
  )
}
