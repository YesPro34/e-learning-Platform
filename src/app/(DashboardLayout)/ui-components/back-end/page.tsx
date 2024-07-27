import React from 'react'
import { getCourses } from '../../helpers/getCourses'
import { Typography, Box, Card, Button, Grid, CardContent} from '@mui/material'
import Image from "next/image"
import Link from 'next/link'

export default function backEndPage() {
    const courses = getCourses()
    const frontEndCourses = courses.filter(item => item.type == "back-end")

  return (
    <Box>
      <Box mb={4}>
          <Typography variant="h1">Back End Courses</Typography>
      </Box>
      <Grid container spacing={3}>
          {frontEndCourses.map((course, index) => (
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
    </Box>
  )
}
