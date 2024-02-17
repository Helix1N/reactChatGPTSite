import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Peça o Early Access para Começar</h4>
        <h1 className='gradient__text'>As possibilidades são além da sua imaginação</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis n.</p>
        <h4>Peça o Early Access para Começar</h4>
      </div>
    </div>
  )
}

export default Possibility
