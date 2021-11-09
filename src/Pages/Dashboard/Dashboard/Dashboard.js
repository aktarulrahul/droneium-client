import * as React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddDrone from '../AddDrone/AddDrone';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageDrones from '../ManageDrones/ManageDrones';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import {
  Button,
  AppBar,
  CssBaseline,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Toolbar,
} from '@mui/material';

const drawerWidth = 240;

function Dashboard(props) {
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <NavLink
          style={{ textDecoration: 'none', color: 'black' }}
          to={`${url}/manage-all-orders`}
        >
          <ListItem button>
            <ListItemText primary="Manage All Orders" />
          </ListItem>
        </NavLink>
        <NavLink
          style={{ textDecoration: 'none', color: 'black' }}
          to={`${url}/add-drone`}
        >
          <ListItem button>
            <ListItemText primary="Add a New Drone" />
          </ListItem>
        </NavLink>
        <NavLink
          style={{ textDecoration: 'none', color: 'black' }}
          to={`${url}/make-admin`}
        >
          <ListItem button>
            <ListItemText primary="Make Admin" />
          </ListItem>
        </NavLink>
        <NavLink
          style={{ textDecoration: 'none', color: 'black' }}
          to={`${url}/manage-drones`}
        >
          <ListItem button>
            <ListItemText primary="Manage Drones" />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        <NavLink
          style={{ textDecoration: 'none', color: 'black' }}
          to={`${url}/pay`}
        >
          <ListItem button>
            <ListItemText primary="Pay" />
          </ListItem>
        </NavLink>
        <NavLink
          style={{ textDecoration: 'none', color: 'black' }}
          to={`${url}/my-orders?email='rahul@ai.com'`}
        >
          <ListItem button>
            <ListItemText primary="My Orders" />
          </ListItem>
        </NavLink>
        <NavLink
          style={{ textDecoration: 'none', color: 'black' }}
          to={`${url}/review`}
        >
          <ListItem button>
            <ListItemText primary="Review" />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        <ListItem button sx={{ justifyContent: 'center' }}>
          <Button variant="contained">Logout</Button>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route path={`${path}/manage-all-orders`}>
            <ManageAllOrders />
          </Route>
          <Route path={`${path}/add-drone`}>
            <AddDrone />
          </Route>
          <Route path={`${path}/make-admin`}>
            <MakeAdmin />
          </Route>
          <Route path={`${path}/manage-drones`}>
            <ManageDrones />
          </Route>
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>
          <Route path={`${path}/my-orders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/review'`}>
            <Review />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
