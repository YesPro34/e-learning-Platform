'use client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import { TextField, Box,Typography, Divider,Card, Button } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FavoriteIcon from '@mui/icons-material/Favorite';
import userProfile from "../../../../../../public/images/profile/user.png"
import Image from 'next/image';


export default function VideoPage() {
  const params = useParams();
  const id = params.id
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=AIzaSyBuPaBnOxJcNNf6GgsHX-ps-B_XwUt-LtQ`);
          const data = await response.json();
          setVideoData(data.items[0]);
        } catch (error) {
          console.error('Error fetching video data:', error);
        }
      };

      fetchData();
    }
  }, [id]);

  if (!videoData) {
    return <p>Loading...</p>;
}

  return (
    <Box container spancing={4}>
    <BaseCard className={{
        marginBottom:"50px"
    }} >
     {/* Video Player */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          paddingTop: '56.25%', // Aspect ratio for 16:9 video
        }}
      >
           <Box
            component="iframe"
            src={`https://www.youtube.com/embed/${id}`}
            title={videoData.snippet.title}
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius:"10px"
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        </Box>
        {/* Video title */}
        <Typography variant="h3" mt={2}>
            {videoData.snippet.title}
        </Typography>
        <Divider sx={{marginY:"20px"}} />
        {/* Date and Likes */}
        <Box sx={{display:"flex",gap:"40px",marginY:"10px",alignItems:"center"}}>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <CalendarTodayIcon color="success" />
                <Typography variant="h4">2024-07-20</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "10px",alignItems:"center" }}>
                <FavoriteIcon color="success" />
                <Typography variant="h4">10 Likes</Typography>
              </Box>
        </Box>
        
    </BaseCard>
    {/* Add Comments */}
    <BaseCard className={{
        marginBottom:"50px"
    }}>
        <Typography variant="h1">Add a Comment</Typography>
        <Box sx={{marginTop:"15px"}}>
            <form action="">
            <TextField
                label="Your Message"
                multiline
                rows={4}
                // value={value}
                // onChange={handleChange}
                variant="outlined" // You can use 'filled' or 'standard' variant as well
                fullWidth />
                <Button variant='contained' color="success"   sx={{fontWeight:"bold", marginTop:"15px"}}>Add Comment</Button>
            </form>

        </Box>
    </BaseCard> 
    {/* User Comments */}
    <BaseCard>
        <Typography variant="h1">User Comments</Typography>
        <Box sx={{marginTop:"40px"}}>
            <Box sx={{marginTop:"15px",display:"flex",gap:"20px", alignItems:"center"}}>
                <Image 
                        style={{ borderRadius: "8px", width:"65px", height:"65px"}}
                        src={userProfile}/>
                <Box>
                    <Typography variant="h5">User name</Typography>
                    <Typography variant="h5">YYYY-MM-DD</Typography>
                </Box>
            </Box>
            <Card sx={{paddingY:"25px", paddingX:"19px", marginTop:"10px", backgroundColor:"lightgray"}}>
                <Typography  variant="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate repellat minus et vitae repudiandae repellendus porro nihil adipisci. Officia!</Typography>
            </Card>
        </Box>

        <Box sx={{marginTop:"40px"}}>
            <Box sx={{marginTop:"15px",display:"flex",gap:"20px", alignItems:"center"}}>
                <Image 
                        style={{ borderRadius: "8px", width:"65px", height:"65px"}}
                        src={userProfile}/>
                <Box>
                    <Typography variant="h5">User name</Typography>
                    <Typography variant="h5">YYYY-MM-DD</Typography>
                </Box>
            </Box>
            <Card sx={{paddingY:"25px", paddingX:"19px", marginTop:"10px", backgroundColor:"lightgray"}}>
                <Typography  variant="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate repellat minus et vitae repudiandae repellendus porro nihil adipisci. Officia!</Typography>
            </Card>
        </Box>
    </BaseCard> 

    </Box>

  );
}
