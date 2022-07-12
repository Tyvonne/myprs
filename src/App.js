import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Chart } from "react-google-charts";

export const data = [
  ["Date", "Hang power clean [kg]"],
  ["29/04/2021", 63],
  ["24/06/2022", 65],
  ["11/07/2022", 75],
];

export const options = {
  isStacked: true,
  height: 300,
  legend: { position: "top", maxLines: 3 },
  vAxis: { minValue: 0 },
};

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
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Box>
        </header>
      </div>
      <div>
        <Chart
          chartType="AreaChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

export default App;
