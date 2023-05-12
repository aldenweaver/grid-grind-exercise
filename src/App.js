import React, { useState } from 'react';

import './App.css';
import Display from './components/display-components/Display';
import Thumbnail from './components/display-components/Thumbnail';
import HtmlGrid from './components/grid-components/HtmlGrid';

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
    <div className="App">
      <HtmlGrid/>
      <Display currentImg={currentImg} nextImg={nextImg} prevImg={prevImg} randomImg={randomImg}/>
      <div className="thumbnails">
        {imgs.map((img, index) => { return (
          <Thumbnail key={index} path={img} setCurrentImg={setCurrentImg}>
          </Thumbnail>
        );})}
      </div>
    </div>
  );
}

export default App;
