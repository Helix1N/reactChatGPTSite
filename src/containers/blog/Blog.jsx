import React from 'react'
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Muito está acontecendo, estamos conversando sobre</h1>
      </div>
      <div className='gpt3__blog-container'>
      <div className="gpt3__blog-container__groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 e Open  AI são o futuro. Vamos explorar, que tal?" />
      </div>
      <div className="gpt3__blog-container__groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" title="GPT-3 e Open  AI são o futuro. Vamos explorar, que tal?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" title="GPT-3 e Open  AI são o futuro. Vamos explorar, que tal?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" title="GPT-3 e Open  AI são o futuro. Vamos explorar, que tal?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" title="GPT-3 e Open  AI são o futuro. Vamos explorar, que tal?" />
      </div>
      </div>
    </div>
  )
}

export default Blog
