// import React from 'react';
import "../CSS/css/Portafolio.css";
import Pagina from "../Img/Portafolio/Demo-web.JPG";
import Curriculum from "../Img/Portafolio/Curriculum-personal.JPG";

function Portafolio() {
  return (
    <div className="main-contenedor-all">
        <article className='portafolio-article'>
            <h1>Trabajos realizados</h1>
            <div className='portafolio-div-all'>
                <div>
                    <h3>Desarrollo página Demo VLA</h3>
                    <img className='portafolio-img' src={Pagina}></img>
                    <br></br>
                    <a className='portafolio-link-a' href='https://yeraf.github.io/YokuDemoVLAWeb/' target="_blank">Ver Demo VLA</a>
                </div>
                <div>
                    <h3>Curriculum Personal</h3>
                    <img className='portafolio-img' src={Curriculum}></img>
                    <br></br>
                    <a className='portafolio-link-a' href='https://yeraf.github.io/YokuDemoVLAWeb/' target="_blank">Ver Página</a>
                </div>
            </div>
        </article>
    </div>
  )
}

export default Portafolio