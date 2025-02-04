import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


import {getCourses} from "../../helpers/getCourses.js"


const CourseCard = ({courses}) => {
  return (
    <Grid container spacing={3}>
      {courses.map((course, index) => (
        <Grid
          key={index}
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
            <Image
              src={course.img}
              alt="img"
              style={{ width: "100%", height: "250px" }}
            />
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography variant="h4">{course.title}</Typography>
              <Typography
                color="textSecondary"
                mt={1}
                fontSize="14px"
                fontWeight={400}
              >
                {course.subtitle}
              </Typography>
              <Link href={`/ui-components/playlist/${course.id}`}>
                <Button
                  variant="contained"
                  sx={{
                    mt: "15px",
                    backgroundColor: course.btncolor,
                    fontWeight:"700",
                    "&:hover": {
                      backgroundColor: course.btncolor,
                    },
                  }}
                >
                  See Playlist
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseCard;
