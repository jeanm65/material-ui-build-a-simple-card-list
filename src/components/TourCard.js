import { Box, Grid, Paper } from '@mui/material';
import React from 'react'
import Typography from '@mui/material/Typography';
import {AccessTime} from '@mui/icons-material';
import Rating from '@mui/material/Rating';

function TourCard() {
  return (
    <Grid item xs={3}>
        <Paper elevation={3}>
           <img src='https://media.istockphoto.com/photos/beautiful-landscape-with-waterfall-in-northern-forest-on-summer-of-picture-id1366230496?b=1&k=20&m=1366230496&s=170667a&w=0&h=GySyxgFUa2Elmgq6xsg-bIACQ3fEDGnRZIgXRV16dJk=' alt='' className='img'/>
           <Box paddingX={1}>
                <Typography variant='subtitle1 ' component='h2' marginBottom={2}>
                    Immerse into the falls
                </Typography>
                <Box
           sx={{
            display: 'flex',
            alighItems: 'center',
           }}>
                <AccessTime sx={{ width: 12.5 }} />
                <Typography variant='body2' component='p' marginLeft={0.5}>
                    5hours
                </Typography>
                </Box>
                <Box 
                sx={{
                  display: 'flex',
                  alighItems: 'center',
                 }}
                 marginTop={3}>
                     <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                        <Typography variant='body2' component='p' marginLeft={0.5}>
                            4.5
                        </Typography>
                        <Typography variant='body3' component='p' marginLeft={0.5} marginTop={0}>
                            (655 reviews)
                        </Typography>     
                 </Box>
                 <Box>
                    <Typography variant="h6" component="h3" marginTop={0}>
                        From C $450
                    </Typography>
                 </Box>
                 <Box>

                 </Box>
           </Box>
           
        </Paper>
    </Grid>
  )
}

export default TourCard;
