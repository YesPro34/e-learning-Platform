import React from "react";
import BaseCard from "../shared/DashboardCard";
import { Button,Card, CardContent, Grid, Typography,Box } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';

const CoursesOverview = () => {

  return (
    <Grid container spacing={3}>
        
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          sx={{
            display: "flex",
            
          }}
        >
          <Card
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography variant="h4">Likes and Comments</Typography>
              <Typography
                color="textSecondary"
                mt={1}
                fontSize="14px"
                fontWeight={400}
              >
               Total Likes : 12
              </Typography>
              <Button
                variant="contained"
                color="secondary"
              >
                View Likes 
              </Button>

              
              <Typography
                color="textSecondary"
                mt={1}
                fontSize="14px"
                fontWeight={400}
              >
               Total Comments : 20
              </Typography>
              <Button
                variant="contained"
                color="secondary"
              >
                View Comments
              </Button>
          
              <Typography
                color="textSecondary"
                mt={1}
                fontSize="14px"
                fontWeight={400}
              >
               saved Playlists : 14
              </Typography>
              <Button
                variant="contained"
                color="secondary"
              >
                View Playlists
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Top Category  */}
        <Grid
        item
        xs={12}
        sm={6}
        lg={4}
        sx={{
            display: "flex",
            alignItems: "stretch",
        }}
        >
        <Card
            sx={{
            p: 0,
            width: "100%",
            }}
        >
            <CardContent
            sx={{
                paddingX:'17px',
                width: "100%",
            }}
            >
            <Typography variant="h4">Top Categories</Typography>
            <Box 
                sx={{
                display: "flex", 
                flexWrap: "wrap", 
                gap: "10px",
                marginTop:"15px"
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px", paddingY: "8px", paddingX: "5px", backgroundColor: "lightgray", width: "max-content", borderRadius: "5px" }}>
                <CodeIcon />
                <Typography variant="h6">Development</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px", paddingY: "8px", paddingX: "5px", backgroundColor: "lightgray", width: "max-content", borderRadius: "5px" }}>
                <CodeIcon />
                <Typography variant="h6">Design</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px", paddingY: "8px", paddingX: "5px", backgroundColor: "lightgray", width: "max-content", borderRadius: "5px" }}>
                <CodeIcon />
                <Typography variant="h6">Science</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px", paddingY: "8px", paddingX: "5px", backgroundColor: "lightgray", width: "max-content", borderRadius: "5px" }}>
                <CodeIcon />
                <Typography variant="h6">Software</Typography>
                </Box>
            </Box>
            </CardContent>
        </Card>
        </Grid>

        {/* Popular Topics  */}
        <Grid
      item
      xs={12}
      sm={6}
      lg={4}
      sx={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <Card
        sx={{
          p: 0,
          width: "100%",
        }}
      >
        <CardContent
          sx={{
            paddingX:'17px',
            width: "100%",
            
          }}
        >
          <Typography variant="h4">Popular Topics</Typography>
          <Box 
            sx={{
              display: "flex", 
              flexWrap: "wrap", 
              gap: "10px",
              marginTop:"15px"
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", paddingY: "8px", paddingX: "5px", backgroundColor: "lightgray", width: "max-content", borderRadius: "5px" }}>
              <CodeIcon />
              <Typography variant="h6">Development</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", paddingY: "8px", paddingX: "5px", backgroundColor: "lightgray", width: "max-content", borderRadius: "5px" }}>
              <CodeIcon />
              <Typography variant="h6">Design</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", paddingY: "8px", paddingX: "5px", backgroundColor: "lightgray", width: "max-content", borderRadius: "5px" }}>
              <CodeIcon />
              <Typography variant="h6">Science</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", paddingY: "8px", paddingX: "5px", backgroundColor: "lightgray", width: "max-content", borderRadius: "5px" }}>
              <CodeIcon />
              <Typography variant="h6">Software</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
        </Grid>

    </Grid>
  );
};

export default CoursesOverview;
