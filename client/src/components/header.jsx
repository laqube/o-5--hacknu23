//HEADER FOR UNIVERSAL USE
import * as React from 'react';
import { AppBar, Toolbar, IconButton, Button, Grid, Container } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    button: {
      fontSize: '1.05rem',
      fontFamily: 'Raleway, sans-serif',
      fontWeight: '500',
    },
  },
  palette: {
    primary: {
      light: '#6fbf73',
      main: '#fff',
      dark: '#357a38',
      contrastText: '#4caf50',
    },
    secondary: {
      light: '#6fbf73',
      main: '#4caf50',
      dark: '#357a38',
      contrastText: '#fff',
    },
  },
});

function Header() {
      const [anchorElNav, setAnchorElNav] = React.useState(null);
      const [anchorElUser, setAnchorElUser] = React.useState(null);

      const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" variant='outlined'>
        <Container maxWidth="lg" sx={{ mx: '5' }}>
          <Toolbar disableGutters>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <IconButton color="inherit">
                  <PublicIcon fontSize='large'/>
                </IconButton>
                <Link to="/">
                  <Button variant="text" color="secondary" sx={{ mr: 2 }}>Главная</Button>
                </Link>
                <Link to="/">
                  <Button variant="text" color="secondary" sx={{ mr: 1 }}>О Нас</Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/login">
                  <Button variant="contained" color="secondary" sx={{ ml: 1 }}>Вход</Button>
                </Link>
                <Link to="/client/registration">
                  <Button variant="contained" color="secondary" sx={{ ml: 2 }}>Регистрация</Button>
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      
    </ThemeProvider>

  );
}

export default Header;
