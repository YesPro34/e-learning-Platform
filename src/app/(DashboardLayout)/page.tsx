'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components

import CourseCard from '@/app/(DashboardLayout)/components/dashboard/Course';
import Title from './components/titles/Title';
import CoursesOverview from './components/QuickOptions/QuickOptions'
import { useEffect, useState } from 'react';
import { Pagination, Stack,Paper } from "@mui/material";
import BaseCard from "./components/shared/BaseCard"
import { getCourses } from './helpers/getCourses';


const Dashboard = () => {

  const [page, setPage] = useState(1);
  const videosPerPage = 9;

  const courses = getCourses()

  // Calculate the number of pages
  const totalPages = Math.ceil(courses.length / videosPerPage);
  
  // Get current page's videos
  const currentVideos = courses.slice((page - 1) * videosPerPage, page * videosPerPage);
  
  // Handle page change
    const handleChangePage = (event, value) => {
      setPage(value);
    };
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
    <Box mt={3}>

      <Grid container spacing={3}>
      <Title  title="Quick Options"/>
        <Grid item xs={12}  lg={12} marginBottom={10}>
          <CoursesOverview />
        </Grid> 
      <Title  title="Our Courses"/>
        <Grid item xs={12}  lg={12}>
          <Box sx={{marginBottom:"20px"}}>
            <CourseCard courses={currentVideos} />
          </Box>
        </Grid> 
          <Grid item xs={12} lg={12} >
            <Stack spacing={2} sx={{justifyContent:"center",alignItems:"center"}}>
            <Pagination 
                count={totalPages} 
                page={page} 
                onChange={handleChangePage} 
                color="secondary" 
              />
            </Stack>
        </Grid>
      </Grid>
    </Box>
  </PageContainer>
  )
}

export default Dashboard;
