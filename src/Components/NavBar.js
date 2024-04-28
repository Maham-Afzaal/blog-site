import React, { useState,useEffect} from 'react'
import { AppBar,Button,IconButton,Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
// import styles from '../styles/styling.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
    const [click,setClick]=useState(false);
    const handleClick=()=>{
        setClick(!click);
    }
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      // Use setTimeout to add the 'loaded' class after 1 second
      const timeout = setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
  
      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(timeout);
    }, []);
  return (
    <Box className={`widget--animation-fade ${isLoaded ? 'loaded' : ''} `}>
        <AppBar sx={{backgroundColor:'#282830',boxShadow:'0 0 10px #d21137'}} elevation={0}>
            <Toolbar sx={{display:'flex', justifyContent:'space-between',}}>
                <Box>
                    <Image src='/blogLogo.png' alt='logo' height={80} width={200}/>
                    {/* <Typography variant='h4' sx={{fontSize:{xs:'1.5rem'}}}>Blog Site</Typography> */}
                </Box>
                <Box className={click? 'boxRow':'boxNo'}sx={{opacity:click?0.7:2}}>
                <Button sx={{border:'none',color:'white','&:hover':{backgroundColor:'transparent'}}} disableRipple> About</Button>
                <Button sx={{border:'none',color:'white','&:hover':{backgroundColor:'transparent'}}} disableRipple>Scdeule</Button>
                 <Button sx={{border:'none',color:'white','&:hover':{backgroundColor:'transparent'}}} disableRipple>Gallery</Button>
                <Button sx={{border:'none',color:'white','&:hover':{backgroundColor:'transparent'}}} disableRipple> Video</Button>
               <Button sx={{border:'none',color:'white','&:hover':{backgroundColor:'transparent'}}} disableRipple>   Contact</Button>
                </Box>
                <Box className='menuBtn'>
                    <IconButton onClick={handleClick}>
                        <MenuIcon sx={{fontSize:'2.5rem',color:'white'}}/>
                    </IconButton>
                </Box>

            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default NavBar