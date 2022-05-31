import React from 'react'
import { Article } from './App'
import './Card.css'
import dayjs from 'dayjs'

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
          <p>{dayjs(date).format('MMM D, YYYY')}</p>
        </div>
      </div>
      <p className='abstract'>{abstract}</p>
      {subsection !== undefined && (
        <p className='category'>
          category:{' '}
          {`${subsection.charAt(0).toUpperCase()}${subsection.slice(1)}` || 'Arts'}
        </p>
      )}
    </article>
  )
}
