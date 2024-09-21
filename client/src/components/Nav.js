import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AllEvents from "../views/AllEvents";
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { blueGrey, grey } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

function Nav(){

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  const eventChange = () =>{ 
    let path = `/events`; 
    navigate(path);
  }
  return (
   
  <AppBar position="static" sx={{ mb: '5px', position: 'relative', zIndex:'+1'}}>
    <Toolbar variant="regular" sx={{ bgcolor: "lightgrey", borderBottom: 1, borderColor: 'grey.500' }}>
      <Grid 
        container 
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <AdbIcon color="black" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        
        <Typography variant="h6" color="black" component="div" sx={{ paddingLeft:'5px', pr:'10px' }}>
          Current Affairs Tracker
        </Typography>
        <Button 
          variant="h6" 
          href='/' 
          color="black" 
          component="div" 
          sx={{color:'black', paddingLeft:'10px', pr:'10px' }}
          onClick={routeChange}
        >
          Home
        </Button>
        <Button
          variant="h6" 
          href='/events' 
          color="black" 
          component="div" 
          sx={{ color:'black', paddingLeft:'10px', pr:'10px' }}
          onClick={eventChange}
        >
          Events
        </Button>
      </Grid>
    </Toolbar>
  </AppBar>
  );
}
export default Nav;



 // <AppBar position="static">
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="a"
    //         sx={{
    //           mr: 2,
    //           display: { xs: 'none', md: 'flex' },
    //           fontFamily: 'monospace',
    //           fontWeight: 700,
    //           letterSpacing: '.3rem',
    //           color: 'black',
    //           textDecoration: 'none',
    //         }}
    //       >
    //         LOGO
    //       </Typography>
    //       <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //         <Typography
    //           variant="h6"
    //           noWrap
    //           component="a"
    //           href="/"
    //           sx={{
    //             mr: 2,
    //             display: { xs: 'none', md: 'flex' },
    //             fontFamily: 'monospace',
    //             fontWeight: 700,
    //             letterSpacing: '.3rem',
    //             color: 'black',
    //             textDecoration: 'none',
    //           }}
    //         >
    //           HOME
    //         </Typography>
    //         <Typography
    //           variant="h6"
    //           noWrap
    //           component="a"
    //           href="/events"
    //           sx={{
    //             mr: 2,
    //             display: { xs: 'none', md: 'flex' },
    //             fontFamily: 'monospace',
    //             fontWeight: 700,
    //             letterSpacing: '.3rem',
    //             color: 'black',
    //             textDecoration: 'none',
    //           }}
    //         >
    //           EVENTS
    //         </Typography>
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>



// export default function Nav(){
//   return(
//     <Box>
//       <div className="navbar">
//         <div className="logo">Current Affairs Tracker</div>
//           <ul className="nav-links">
//             <Link to="/">Home</Link>
//           </ul>
//       </div> 
//     </Box>
//   );
// }