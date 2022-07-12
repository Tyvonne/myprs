import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Chart from './components/BuildChart.components'
import SelectAthlete from './components/SelectAthlete.components'

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  My PR's
                </Typography>
                <SelectAthlete></SelectAthlete>
              </Toolbar>
            </AppBar>
          </Box>
        </header>
      </div>
      <div>
      <Chart></Chart>
      </div>
    </div>
  );
}

export default App;
