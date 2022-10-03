import React from 'react';
import '../CSS/css/Principal.css';
import { Link } from 'react-router-dom';

function Principal() {
  return (
    <div className='div-general'>
    <div className='container-principal'>
        <article className='content-border'>
            <div className='text-principal'>
            <h1 className='sometxt'>Bienvenido a mi sitio Web</h1>
            <Link to='/'><button>Ir a Home</button></Link>
            </div>
        </article>
    </div>
    </div>
  )
}

export default Principal