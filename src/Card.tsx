import React from 'react'
import { Article } from './App'
import './Card.css'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

export const Card = ({
  id,
  title,
  byline,
  abstract,
  date,
  img,
  imgCaption,
  subsection
}: Article) => {
  return (
    <Link style={{ textDecoration: 'none' }} to={`/articles/${id}`}>
      <article className='article'>
        <img className='article-img' src={img} alt={imgCaption} />
        <div>
          <h3 className='article-title'>{title}</h3>
          <div className='author-date-pair'>
            <p>{byline}</p>
            <p>{dayjs(date).format('MMM D, YYYY')}</p>
          </div>
        </div>
        <p>{abstract}</p>
        {subsection !== undefined && (
          <p className='category'>
            {`${subsection.charAt(0).toUpperCase()}${subsection.slice(1)}` || 'Arts'}
          </p>
        )}
      </article>
    </Link>
  )
}
