
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface Course {
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
        height: number;
        width: number;
      };
    };
    resourceId: {
      videoId: string;
    };
  };
}

interface VideoCardProps {
  course: Course;
}

const VideoCard: React.FC<VideoCardProps> = ({ course }) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  const { title, thumbnails = {}, resourceId = {} } = course.snippet;
  const { medium } = thumbnails;

  const handleVideoClick = () => {
    router.push(`/ui-components/video/${resourceId.videoId}`);
  };

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
      onClick={handleVideoClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <PlayArrowIcon
        className="hover-icon"
        sx={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          right: "1rem",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: hover ? 'flex' : 'none',
          alignItems: "center",
          justifyContent: "center",
          fontSize: "4rem",
          color: "white",
          padding: "1rem",
          width: "100%",
          height: "11.2rem",
        }}
      />
      <Image
        src={medium.url}
        alt="img"
        height={medium.height}
        width={medium.width}
        style={{ borderRadius: "8px", width: "100%", objectFit: "cover" }}
      />
      <Typography variant="h4">{title}</Typography>
    </Grid>
  );
};

export default VideoCard;
