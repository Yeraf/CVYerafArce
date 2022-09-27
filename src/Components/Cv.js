import React from 'react';
import '../CSS/css/Cv.css';
import MiFoto from '../Img/Cv/MiFoto.jpeg';

function Cv() {
  return (
    <div className='main-contenedor-all'>
      <main className='main-cv-complete'>
        <div className='main-cv'>
          <div>
            <img className='img-cv-picture' src={MiFoto}></img>
          </div>
          <div>
            <h1 className='text-color-cv'>Yeraf Arce Guerrero</h1>
            <h3 className='text-color-cv'>Front End Developer</h3>
            <p className='text-color-cv'>yerafarceguerrero9@gmail.com</p>
            <p className='text-color-cv'>+506 8726-1983</p>
          </div>
        </div>
      </main>
      <article>
          <div className='article-cv-experiencia'>
            <h1>Experiencia Loboral</h1>
            <h2><b>Noah Systems</b></h2>
            <p>Lorem
            Lorem
            Lorem
            <br></br>
            Lorem
            <br></br>
            Loremv
            <br></br>
            Lorem
            <br></br>
            Lorem
            <br></br>
            LoremLore
            <br></br>m
            Lorem
            <br></br>
            <br></br>
            </p>
          </div>
      </article>
    </div>
  )
}

export default Cv