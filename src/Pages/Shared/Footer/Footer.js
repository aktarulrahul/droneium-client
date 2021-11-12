import React from 'react';
import {
  Box,
  Container,
  Grid,
  Divider,
  Typography,
  Paper,
  IconButton,
  InputBase,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from '@mui/icons-material/Group';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PolicyIcon from '@mui/icons-material/Policy';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import drone from '../../../images/drone.png';

const Footer = () => {
  return (
    <Box
      style={{ backgroundColor: '#1A76D2', color: 'white', marginTop: '100px' }}
    >
      <Container>
        {/* rone -Fly */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={drone}
              style={{
                width: '95%',
                marginTop: '-85px',
              }}
              alt="drone"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" align="center" sx={{ my: 2 }}>
              Let's Fly
            </Typography>
          </Grid>
        </Grid>
        {/* Grid of Info */}
        <Grid container spacing={2}>
          {/* Info */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="h4">Droneium</Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <HomeIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="132, My Street, Kingston, New York 12401" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <MailIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="info@droneium.com" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CallIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="+916438747438" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Links</Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <GroupIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Our Team" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ReviewsIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Reviews" />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <PolicyIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Privacy Policy" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PermMediaIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Media" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
          {/* News Letter */}
          <Grid item xs={12} md={6} sx={{ my: 2, px: 2 }}>
            <Typography variant="h6">SIGNUP TO NEWSLETTER</Typography>
            <Paper
              component="form"
              sx={{
                p: '2px 4px',
                mt: 2,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter Your Email"
              />

              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                color="primary"
                sx={{ p: '10px' }}
                aria-label="directions"
              >
                Subscribe
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
        {/* Divider */}
        <Divider variant="middle" />
        {/* text */}
        <Typography variant="h6" align="center">
          Droneium | 2021. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
