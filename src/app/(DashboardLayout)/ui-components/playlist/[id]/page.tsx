'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material'
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { useParams } from 'next/navigation';
import { GolfCourse } from '@mui/icons-material';
import {getCourses} from "../../../helpers/getCourses"
import Image from 'next/image';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Title from '@/app/(DashboardLayout)/components/titles/Title';
import VideoCard from '@/app/(DashboardLayout)/components/videocard/VideoCard';

export default function Playlist() {
    const courses = getCourses()
    const courseID = useParams()
    const listCourse = courses.filter((item) => item.id == courseID.id)
    const course = listCourse[0]
    
  return (
    <Box container spacing={3}>
        {/* Course title */}
    <Grid container spacing={2} marginBottom="50px">
      <Grid item xs={12}>
        <BaseCard>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "lightgray",
              width: "max-content",
              paddingY: "10px",
              paddingX: "10px",
              marginBottom:"10px",
              borderRadius: "5px",
            }}
          >
            <TurnedInNotIcon />
            <Typography variant="h4" color="gray">
              Save Playlist
            </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "stretch",
            }}
          >
            <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
              <Image
                src={course.img}
                alt="img"
                style={{ height: "250px", borderRadius: "8px", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h1">
                Complete {course.title} Course
              </Typography>
              <Typography variant="h5" sx={{ marginY: "15px" }}>
                {course.description}
              </Typography>
              <Box sx={{ display: "flex", gap: "15px" }}>
                <CalendarTodayIcon color="primary" />
                <Typography variant="h4">2024-07-20</Typography>
              </Box>
            </Grid>
          </Grid>
        </BaseCard>
      </Grid>
    </Grid>
      <Title title="Playlist" />

      {/* PLAYLIST */}
      <Grid container spacing={2}>
            <Grid item xs={12}>
                <BaseCard>
                    <Grid          
                      container
                      spacing={2}
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "stretch",
                        
                        
                       }}>
                        <VideoCard course={course}/>
                        <VideoCard course={course}/>
                        <VideoCard course={course}/>
                        <VideoCard course={course}/>
                    </Grid>
                </BaseCard>
            </Grid>
      </Grid>
    </Box>

  )
}