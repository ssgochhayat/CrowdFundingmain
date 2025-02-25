import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            ROTARACT CLUB
          </Link>
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/about">
            ABOUT US
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            CONTACT US
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;