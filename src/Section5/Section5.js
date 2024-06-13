import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Features from './Features';
import getLPTheme from './getLPTheme';

export default function Section5() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProvider theme={LPtheme}>
      <Box sx={{ bgcolor: 'white' }}>
        <Features />
      </Box>
    </ThemeProvider>
  );
}
