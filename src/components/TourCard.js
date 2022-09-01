import { Box, Grid, Paper } from '@mui/material';
import React from 'react'
import Typography from '@mui/material/Typography';
import {AccessTime} from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import {createTheme, ThemeProvider} from "@mui/material";

// customizing our own style with createTheme
const theme = createTheme({
    components:{
      // here, we customize our topography: if the variant is body2, i want that that the font size is 11.
    MuiTypography: {
        variants: [
          {
            props: {
              variant: 'body2',
            },
            style:  {
              fontSize: 11,
            }
          },

          // if the variant is body3, i want that that the font size is 9.
          {
            props: {
              variant: 'body3',
            },
            style:  {
              fontSize: 9,
              // backgroundColor: 'blue'
            }
          },
        ],
    },
  },
});

// to apply these style, we should use the themeProvider of mui, and wrap all component in what we want to apply the customed style.

function TourCard({tour}) {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
           <img src={tour.image} alt='' className='img'/>
           <Box paddingX={1}>
                <Typography variant='subtitle1 ' component='h5' marginBottom={1}>
                    {tour.name}
                </Typography>
                <Box
           sx={{
            display: 'flex',
            alighItems: 'center',
           }}>
                <AccessTime sx={{ width: 12.5 }} />
                <Typography variant='body2' component='p' marginLeft={0.5}>
                    {tour.duration}hours
                </Typography>
                </Box>
                <Box 
                sx={{
                  display: 'flex',
                  alighItems: 'center',
                 }}
                 marginTop={3}>
                     <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                        <Typography variant='body2' component='h4' marginLeft={0.5}>
                            {tour.rating}
                        </Typography>
                        <Typography variant='body3' component='h4' marginLeft={0.5} marginBottom={0}>
                            ({tour.numberOfReviews} reviews)
                        </Typography>     
                 </Box>
                 <Box>
                    <Typography variant="h6" component="h3" marginTop={0}>
                        From C {tour.price}
                    </Typography>
                 </Box>
                 <Box>

                 </Box>
           </Box>
           
          </Paper>
        </ThemeProvider>
    </Grid>
  )
}

export default TourCard;
