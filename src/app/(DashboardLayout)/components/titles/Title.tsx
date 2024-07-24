import React from 'react'
import { Card, CardContent, Typography, Button, Grid, Box, Divider } from "@mui/material";
export default function Title({title}) {
  return (
    <Box>
        <Typography sx={{marginLeft :"25px"}} variant='h2' fontWeight="800"  >
            {title}
        </Typography>
        <Divider  />
    </Box>
  )
}
