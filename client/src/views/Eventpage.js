import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';

function Eventpage() {
    let { id }= useParams();
    const [eventObject, seteventObject]= useState({});
    
    useEffect(() => {
        axios.get(`http://localhost:3001/events/byId/${id}`).then((response) => {
            //console.log(response);
            seteventObject(response.data);
        });
    })
  return (
    <Box sx={{minHeight:'100%', flexGrow: 1, p:3, m:'3%'}}>
      <Card sx={{p:3}}>
        <Grid container sx={{borderBottom:1}}>
          <Typography variant="h3" gutterBottom> 
            {eventObject.event}
          </Typography>
        </Grid>
        <Grid container sx={{borderBottom:1}}>
          <Grid container> 
            <Typography variant="h5" gutterBottom> 
              Background:
            </Typography>
          </Grid>
          <Grid sx={{m:1, p:1}}>
            <Card sx={{p:'5px'}}>
              <Typography variant="h6" gutterBottom> 
                {eventObject.description}
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container sx={{borderBottom:1, p:1}}>
          <Typography variant="h5" gutterBottom> 
            Country: {eventObject.country}
          </Typography>
        </Grid>
        <Grid container sx={{borderBottom:1, p:1}}>
          <Grid container>
            <Typography variant="h5" gutterBottom> 
              Deaths: {eventObject.deaths}
            </Typography>
          </Grid>
          <Grid container>
            <Typography variant="h5" gutterBottom> 
              Google Trends Interest over the Past Month: {eventObject.trend}
            </Typography>
          </Grid>
          <Grid container>
            <Typography variant="h5" gutterBottom> 
              Twitter Hashtag: {eventObject.tag}
            </Typography>
          </Grid> 
        </Grid>
        <Grid container sx={{ display:'flex'}}>
          <Grid container sx={{p:1}}>
              <Grid container>
                <Typography variant="h5" gutterBottom>Related Media: </Typography>
              </Grid>
              <Grid container >
                <Grid container> 
                  <Typography variant='overline'> 
                    {eventObject.url1}
                  </Typography>
                </Grid>
                <Grid container> 
                  <Typography variant='overline'> 
                    {eventObject.url2}
                  </Typography>
                </Grid>
                <Grid container> 
                  <Typography variant='overline'> 
                    {eventObject.url3}
                  </Typography>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

export default Eventpage

{/* <div className='eventPage'>
      <div className='title'>{eventObject.title}</div>
      <div className='eventdesc'>{eventObject.eventDescription}</div>
      <div className='country'>{eventObject.country}</div>
    </div> */}