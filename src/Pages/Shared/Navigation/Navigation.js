import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function ButtonAppBar() {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink
            to="/"
            style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
          >
            <Typography variant="h6" component="div">
              Droneium
            </Typography>
          </NavLink>
          <NavLink
            to="/explore"
            style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
          >
            <Typography variant="body" component="div">
              Explore
            </Typography>
          </NavLink>
          {user.email ? (
            <Box>
              <Button
                sx={{ color: 'white' }}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <DashboardIcon sx={{ mr: 1 }} />
                Dashboard
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem>
                  <Avatar
                    alt={user.displayName}
                    src={user.photoURL ? user.photoURL : ''}
                    sx={{ width: 24, height: 24, mr: 1 }}
                  />
                  {user.displayName}
                </MenuItem>
                <NavLink
                  to="/dashboard"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <MenuItem onClick={handleClose}>
                    <AccountBalanceIcon sx={{ mr: 1 }} />
                    Dashboard
                  </MenuItem>
                </NavLink>
                <MenuItem onClick={logout}>
                  <LogoutIcon sx={{ mr: 1 }} />
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: 'none', color: 'inherit' }}
              to="/login"
            >
              <Button color="inherit">
                <LoginIcon sx={{ mr: 1 }} />
                Login
              </Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
