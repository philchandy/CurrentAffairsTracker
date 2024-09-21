import React from "react";
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

const Legend = (props) => {
  const renderLegendKeys = (stop, i) => {
    return (
      <div key={i} className="txt-s">
        <span
          className="legend-key"
          style={{ backgroundColor: stop[1] }}
        />
        <span>{`${stop[0].toLocaleString()}`}</span>
      </div>
    );
  };

  return (
    <Box 
      sx={{  
        p: 1, 
        border: '5px ', 
        width:'300px', 
        zIndex:1, 
        position:'absolute', 
        bottom:275, 
        right:200, 
        backgroundColor:'white',
        borderRadius:'10px'
      }}>
      <div className="legend">
        <div className="mb6">
          <Typography variant='h6'>{props.active.name}</Typography>
          <Typography variant='caption'>{props.active.description}</Typography>
        </div>
        {props.stops.map(renderLegendKeys)}
      </div>
    </Box>
  );
};

export default Legend;
