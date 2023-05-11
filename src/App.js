
import React from 'react';
import './style/index.css'
import Header from './component/header';
import Main from './component/main';
import ButtonGroup from './component/button';
import Image from './component/images';
import City from './image/city.jpg';
import GolfDome from './image/GolfDome.jpg';
import PolarBear from './image/polarbear.jpg';
import SimpleView from './image/simpleview.jpg';
import Footer from './component/footer'



function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <ButtonGroup />
      </div>
      <div className='container'>
        <div className='colums'>
          <div className='column'>
            <Image
              image={City}
              title="City Tour"
              description="Enriching,Adventurous,Immersive" />
          </div>
          <div className='column'>
            <Image
              image={GolfDome}
              title="Playing Golf"
              description="Relaxing,Challenging,Social" />
          </div>
          <div className='column'>
            <Image
              image={PolarBear}
              title="Visiting Zoo"
              description="Educational,Fascinating,Family-friendly " />
          </div>
          <div className='column'>
            <Image
              image={SimpleView}
              title="Playground"
              description="Fun,Active,Social" />
          </div>
        </div>
      </div>
      <div>
        <Footer
          companyName="City Tour"
          Workers="Organized by a City Tour Volunteer"
        />

      </div>
    </div >
  );
}

export default App;



