import React from 'react'
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='O Que é GPT-3' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>As possibilidades são além da sua imaginação</h1>
        <p>Explore a Livraria</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chats de Bots' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
        <Feature title='Base de Conhecimentos' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Feature title='Educação' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
      </div>
    </div>
  )
}

export default WhatGPT3
