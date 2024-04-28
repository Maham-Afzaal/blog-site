import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import clsx from "clsx";

const iconStyles = {
  backgroundColor: "white",
  borderRadius: "50%",
  padding: "8px", // Adjust as needed
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  margin:1,
};
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#282830",}}>
      <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}}} className='shadowCenter'>
        <Box className="boxFooter" sx={{width:{xs:'100%',sm:'100%',md:'25%',lg:'25%'},p:'1rem'}}>
          <Typography variant="h5" sx={{color:'whiteSmoke',fontSize:{xs:'16px',sm:'20px'}}}>
            Welcome to the website of conductor Blog Site
          </Typography>
        </Box>
        <Box sx={{width:{xs:'100%',sm:'100%',md:'25%',lg:'25%'},p:'1rem'}}>
          <Typography variant="h5" sx={{color:'whiteSmoke',fontSize:{xs:'16px',sm:'20px'}}}>
            Social
          </Typography>
          <Box>
            <Box sx={iconStyles}>
              <FacebookIcon />
            </Box>
            <Box sx={iconStyles}>
              <InstagramIcon />
            </Box>
            <Box sx={iconStyles}>
              <TwitterIcon />
            </Box>
            <Box sx={iconStyles}>
              <YouTubeIcon />
            </Box>
          </Box>
        </Box>
        <Box sx={{width:{xs:'100%',sm:'100%',md:'25%',lg:'25%'},p:'1rem'}}>
          <Typography variant="h5" sx={{color:'whiteSmoke',fontSize:{xs:'16px',sm:'20px'}}}>
            Email
          </Typography>
          <Typography variant="body1" sx={{color:'whiteSmoke',fontSize:{xs:'14px',sm:'16px'}}}>
            info@blogsite.com
          </Typography>
        </Box>
        <Box sx={{width:{xs:'100%',sm:'100%',md:'25%',lg:'25%'},p:'1rem'}}>
          <Typography variant="h5" sx={{color:'whiteSmoke',fontSize:{xs:'16px',sm:'20px'}}}>
            PHONE CONTACT
          </Typography>
          <Typography variant="body1" sx={{color:'whiteSmoke',fontSize:{xs:'14px',sm:'16px'}}}>
            (+39) 3403125279
          </Typography>
        </Box>
      </Box>
      <Box className='boxCopyright'>
        <Typography variant="subtitle2" sx={{color:'whiteSmoke',fontSize:{xs:'14px',sm:'16px'}}}>
            @2022MahamAfzaal
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
