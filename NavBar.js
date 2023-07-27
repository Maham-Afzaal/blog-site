import React from 'react'
import { AppBar,IconButton,Toolbar,Box } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
const NavBar = () => {
  return (
    <div>
        <AppBar position='absolute'>
            <Toolbar>
                <Box>
                    <img src='/blog.png' width={60}/>
                    <h3 style={{paddingLeft:'1em'}}>Blogs</h3>
                    </Box>
                <div>
                    <IconButton>
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton>
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton>
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton>
                        <FacebookIcon/>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>

    </div>
  )
}

export default NavBar