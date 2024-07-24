'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components

import DailyActivity from '@/app/(DashboardLayout)/components/dashboard/DailyActivity';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import CourseCard from '@/app/(DashboardLayout)/components/dashboard/Course';
import Title from './components/titles/Title';
import CoursesOverview from './components/QuickOptions/QuickOptions'


const Dashboard = () => {
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
            <CourseCard />
          </Box>
        </Grid> 
      </Grid>
    </Box>
  </PageContainer>
  )
}

export default Dashboard;
