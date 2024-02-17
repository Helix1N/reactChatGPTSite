import React from 'react'
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Melhoras acabam com falta de confiança',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.'
  },
  {
    title: 'Se torne mais ativo e produtivo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Mensagens dinâmicas com a equipe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  },
  {
    title: 'Mais velocidade e melhores construções',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },

]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          O Futuro É Agora, Você Só Precisa Perceber. Entre no Futuro Agora e Faça Acontecer.
        </h1>
        <p>Peça o Early Access para Começar</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item,index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features
