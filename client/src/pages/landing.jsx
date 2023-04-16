//ЛЕНДИНГ СО ВХОДОМ
import React from "react";
import Header from "../components/header"
import { Grid, Container, Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import backgroundImage from './rsc/landingbg1.jpg';
import pic1 from './rsc/landingpic1.jpg'
import serviceImage1 from './rsc/service1.png';
import serviceImage2 from './rsc/service2.png';
import serviceImage3 from './rsc/service3.png';

import {Button} from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles'; 

const styles = {
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    color: 'white',
  },
};

const theme = createTheme({
  Box:{
    justifyContent: 'end',
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
    warning:{
      main: '#E5C34D',
      contrastText: '#000'
    }
  },
});

const services = [
  {
    title: 'Установка Экобокса',
    
    image: serviceImage1,
  },
  {
    title: 'Вывоз Мусора',
    
    image: serviceImage2,
  },
  {
    title: 'Демонтаж Экобокса',
    
    image: serviceImage3,
  },
];
const footerStyle = {
  backgroundColor: '#312A1D',
  color: '#fff',
  height: '50px',
  textAlign: 'center',
  left: '0',
  bottom: '0',
  width: '100%',
};

function Landing() {
  
    return (
      <div>
        <Header/>
        <ThemeProvider theme={theme}>
          <Box style={styles.container}>
            <div style={{marginRight: '12%'}}>
              <h3>Разделяй и Властвуй</h3>
              <h2>Сервисы для защиты окружающей среды</h2>
              <Button color="warning" variant="contained">Узнать больше</Button>
            </div>
          </Box>
          <Container fixed style={{marginTop: '5%'}}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <img src={pic1} alt="mountains" />
              </Grid>
              <Grid item xs={12} md={6}>
                <h1>Наша миссия - создать чистую среду!</h1>
                <h3>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. </h3>
              </Grid>
            </Grid>
          </Container>
          <Container fixed style={{marginTop: '5%'}}>
            <Grid item xs={12} style={{ textAlign: 'center', color: 'green' }}>
              <Typography variant="h4" style={{margin: "10%"}}>
                Наши Сервисы
              </Typography>
            </Grid>
            <Grid container spacing={3}>
              {services.map((service) => (
                <Grid item key={service.title} xs={12} sm={6} md={4}>
                  <Card style={{ borderRadius: 16 }}>
                    <CardMedia
                      style={{ height: 0, paddingTop: '100%' }}
                      image={service.image}
                      title={service.title}
                    />
                    <CardContent style={{ backgroundColor: '#fafafa', padding: '24px', textAlign: 'center',  }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" style={{ backgroundColor: 'white', borderRadius: 8, padding: 8 }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

            </Grid>
          </Container>
          <div style={footerStyle}>
            
          </div>
        </ThemeProvider>
      </div>
    );
  }
  export {  Landing  };
  
