import React from 'react'
import axios from "axios";
import { useRef, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';

function AllEvents() {

    const [listOfEvents, setListOfEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/events').then((response) => {
        setListOfEvents(response.data);
        })
    }, [])

  return (
    <div>
        <Box sx={{
            display:'flex',
            backgroundColor:'lightgray',
            border:1, 
            borderRadius:'5px',
            m:'5%', 
            p:'1%', 
            justifyContent:'center', 
            justifyItems:'center', 
            alignContent:'center',
            alignItems:'center'
            }}>
            <Grid container  columns={{ xs: 4, sm: 8, md: 12 }} sx={{justifyContent:'center'}}>
                {listOfEvents.map((value) => { 
                    return (
                        <Grid> 
                            <div className = 'event' onClick={() => {navigate(`/eventpage/${value.id}`)}}>
                                <Card hoverable sx={{}}>
                                    <CardActionArea>
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {value.country }
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {value.event }
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Deaths: {value.deaths}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {value.tag}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
        
    </div>
  )
}

export default AllEvents