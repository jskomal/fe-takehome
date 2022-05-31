import React from 'react'
import { Article } from './App'
import './Card.css'

export const Card = ({
  title,
  byline,
  abstract,
  date,
  img,
  imgCaption,
  subsection
}: Article) => {
  return (
    <article className='article'>
      <img className='article-img' src={img} alt={imgCaption} />
      <div>
        <h3 className='article-title'>{title}</h3>
        <div className='author-date-pair'>
          <p>{byline}</p>
          <p>{date}</p>
        </div>
      </div>
      <p>{abstract}</p>
      <p>subsection: {subsection || 'arts'}</p>
    </article>
  )
}
