import React from 'react'
import axios from "axios";
import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { WorldMap } from "react-svg-worldmap";
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Legend from '../components/Legend';
import Optionsfield from '../components/Optionsfield';
import data from '../data.json';

import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid'; // Grid version 1
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { blueGrey, grey } from '@mui/material/colors';
import { FixedSizeList as List } from 'react-window';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

mapboxgl.accessToken = 'pk.eyJ1IjoicGNoYW5keSIsImEiOiJjbGd6ZTAwcmwwMTI5M2RwOTBhNTdhdDlxIn0.B-itYjZlob5ySdfACML1YQ';

function Index() {

   
    const options = [
        {
          name: 'Deaths',
          description: 'Estimated total Deaths',
          property: 'deaths',
          stops: [
            [0, '#fcf0ed'],
            [100, '#FFEDA0'],
            [500, '#FED976'],
            [1000, '#FEB24C'],
            [10000, '#FD8D3C'],
            [100000, '#FC4E2A'],
            [300000, '#E31A1C'],
            [500000, '#BD0026'],
            [1000000, '#800026']
          ]
        },
        {
          name: 'Trends',
          description: 'Estimate total interest over the past month',
          property: 'trends',
          stops: [
            [0, '#fcf0ed'],
            [10, '#f4bfb6'],
            [20, '#f1a8a5'],
            [30, '#ee8f9a'],
            [40, '#ec739b'],
            [50, '#dd5ca8'],
            [60, '#c44cc0'],
            [70, '#9f43d7'],
            [80, '#6e40e6'],
            [90, '#75121c'],
            [100, '#301240']
            ]
        }
    ];
    const layers = [
        '0',
        '0-100',
        '100-500',
        '1000-10000',
        '10000-100000',
        '100000-300000',
        '300000-500000',
        '500000-1000000',
        '1000+'
    ];
    const colors = [
        '#fcf0ed',
        '#FFEDA0',
        '#FED976',
        '#FEB24C',
        '#FD8D3C',
        '#FC4E2A',
        '#E31A1C',
        '#BD0026',
        '#800026'
    ];
    const [listOfEvents, setListOfEvents] = useState([]);
    const mapContainerRef = useRef(null);
    const [active, setActive] = useState(options[0]);
    const [map, setMap] = useState(null);
    const drawerWidth = 500;
    
    const navigate = useNavigate();

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [5, 34],
          zoom: 1.5
        });
    
        map.on('load', () => {
          map.addSource('countries', {
            type: 'geojson',
            data,
          },
          map.resize()
        );
    
        map.setLayoutProperty('country-label', 'text-field', [
            'format',
            ['get', 'name_en'],
            { 'font-scale': 1.2 },
            '\n',
            {},
            ['get', 'name'],
            {
                'font-scale': 0.8,
                'text-font': [
                    'literal',
                    ['DIN Offc Pro Italic', 'Arial Unicode MS Regular']
                ]
            }
        ]);

        map.addLayer(
            {
                id: 'countries',
                type: 'fill',
                source: 'countries'
            },
            'country-label'
        );

        map.setPaintProperty('countries', 'fill-color', {
            property: active.property,
            stops: active.stops
        });

        

        setMap(map);
    });

    // Clean up on unmount
        return () => map.remove();
    }, []);

    useEffect(() => {
        paint();
    }, [active]);

    const paint = () => {
        if (map) {
          map.setPaintProperty('countries', 'fill-color', {
            property: active.property,
            stops: active.stops
          });
        }
    };

    const changeState = i => {
        setActive(options[i]);
        map.setPaintProperty('countries', 'fill-color', {
          property: active.property,
          stops: active.stops
        });
      };
    
    const handleChange = (event) => {
        if (active.name == options[0].name) {
            setActive(options[1])
        } else {
            setActive(options[0])
        }
    }


    useEffect(() => {
        axios.get('http://localhost:3001/events').then((response) => {
        setListOfEvents(response.data);
        })
    }, [])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: 'lightgrey',
        padding: theme.spacing(1),
        
    }));

    // create legend
    

    //memoization for rerendering 
    const Row = ({ index, style }) => (
        <div>
            {listOfEvents.map((value) => { 
                return (
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
                                    Interest over the Past Month: {value.trend}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {value.tag}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                )
            })}{index}
        </div>
    );
  

    return (
        <div className='maxHeight' >
            <Grid container spacing={2} columnGap={7} sx={{m:'20px'}}>
                <Grid>
                    <List
                        height={1000}
                        itemCount={5}
                        itemSize={5}
                        width={450}
                    >
                        {Row}
                    </List>
                </Grid>
                <Grid xs={9}>
                    <div>
                        <div ref={mapContainerRef} className='map' >
                            <Legend active={active} stops={active.stops} />
                            <Box 
                                sx={{  
                                    p: 1, 
                                    border: '5px ', 
                                    width:'100px', 
                                    zIndex:1, 
                                    position:'absolute', 
                                    top:180, 
                                    left:660, 
                                    backgroundColor:'white',
                                    borderRadius:'10px'
                                }}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Switch 
                                                onChange={handleChange}
                                            />}
                                        label="Show Interest"
                                    />
                                </FormGroup>
                            </Box>
                            {/* <FormControlLabel 
                                control={
                                    <Switch 
                                        defaultChecked
                                        onChange={changeState} 
                                    />
                                } 
                                label={active.name} 
                            /> */}
                            {/* <Optionsfield
                                options={options}
                                property={active.property}
                                changeState={changeState}
                            /> */}
                        </div>
                    </div>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Index



{/* <div class='map-overlay' id='legend'></div> 





const layers = [
            '0',
            '0-100',
            '100-500',
            '1000-10000',
            '10000-100000',
            '100000-300000',
            '300000-500000',
            '500000-1000000',
            '1000+'
        ];
        const colors = [
            '#fcf0ed',
            '#FFEDA0',
            '#FED976',
            '#FEB24C',
            '#FD8D3C',
            '#FC4E2A',
            '#E31A1C',
            '#BD0026',
            '#800026'
        ];
        const legend = document.getElementById('legend');

        layers.forEach((layer, i) => {
            const color = colors[i];
            const item = document.createElement('div');
            const key = document.createElement('span');
            key.className = 'legend-key';
            key.style.backgroundColor = color;

            const value = document.createElement('span');
            value.innerHTML = `${layer}`;
            item.appendChild(key);
            item.appendChild(value);
            legend.appendChild(item);
        });




*/}