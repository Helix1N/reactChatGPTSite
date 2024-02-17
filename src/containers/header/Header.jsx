import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
      <div className='gpt3__header section__padding' id="home">
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Vamos construir algo incrível com GPT-3 OpenAI</h1>
          <p>Yet bed any for travlling assistance indulgence unplesing.
           Not thoughts all exercice blessing. Indulgence way everything joy alteration boisterous the attatchment. 
           Party we years to order allow asked of.</p>
          <div className='gpt3__header-content__input'>
            <input type='email' placeholder='Seu email'/>
            <button type='button'>Começar</button>
          </div>

          <div className='gpt3__header-content__people'>
            <img src={people} alt='people' />
            <p>1600 pessoas se registraram nas últimas 24 horas </p>
          </div>
        </div>

        <div className='gpt3__header-image'>
          <img src={ai} alt='ai' />
        </div>
        
      </div>
  )
}

export default Header
