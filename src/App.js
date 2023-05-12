import React, { useState } from 'react';

import { Card, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';

import Display from './components/display-components/Display';
import Thumbnail from './components/display-components/Thumbnail';

import { containerStyle, projectStyle } from './styles/displayStyles';
import './App.css';

function App() {
  const imgs = [
    "test-imgs/1.jpg",
    "test-imgs/2.jpg",
    "test-imgs/3.jpg",
    "test-imgs/4.jpg",
    "test-imgs/5.jpg",
    "test-imgs/6.jpg",
    "test-imgs/7.jpg",
    "test-imgs/8.jpg",
    "test-imgs/9.jpg",
    "test-imgs/10.jpg",
    "test-imgs/11.jpg",
    "test-imgs/12.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(imgs[0]);

  function nextImg() {
    setCurrentIndex(currentIndex + 1);
    setCurrentImg(imgs[currentIndex]);  
  }

  function prevImg() {
    setCurrentIndex(currentIndex - 1);
    setCurrentImg(imgs[currentIndex]);  
  }

  function randomImg() {
    setCurrentIndex(Math.floor(Math.random() * (imgs.length)));
    setCurrentImg(imgs[currentIndex]);  
  }

  return (
    <Container className="App" sx={containerStyle}>
      <Typography variant="h4">
        Grid Grind - Grid Exercises
      </Typography>
      <br/>

      <Card sx={projectStyle}>
        <CardHeader title="Image Gallery (Static Data)"/>

        <CardContent sx={containerStyle}>
          <Grid container spacing={2} sx={containerStyle}>
            <Grid item xs={12}>
              <Display currentImg={currentImg} nextImg={nextImg} prevImg={prevImg} randomImg={randomImg} />
            </Grid>
            <Grid item xs={12}>
              <div className="thumbnails">
                {imgs.map((img, index) => { return (
                  <Thumbnail key={index} path={img} setCurrentImg={setCurrentImg}>
                  </Thumbnail>
                );})}
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <br/>

    </Container>
  );
}

export default App;
