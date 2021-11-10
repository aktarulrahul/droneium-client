import React from 'react';
import { Box, Button, AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Droneium
            </Typography>
          </NavLink>
          <Box sx={{ display: 'flex' }}>
            <NavLink to="/explore">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Explore
              </Typography>
            </NavLink>
          </Box>
          <Box>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
