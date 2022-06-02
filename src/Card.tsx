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
          <h3 className='article-title'>{title || 'No Title Provided'}</h3>
          <div className='author-date-pair'>
            <p>{byline || 'No Author provided'}</p>
            <p>{dayjs(date).format('MMM D, YYYY') || 'No Date Provided'}</p>
          </div>
        </div>
        <p className='abstract'>{abstract || 'No content provided'}</p>
        {subsection !== undefined && (
          <p className='category'>
            {`${subsection.charAt(0).toUpperCase()}${subsection.slice(1)}` || 'Arts'}
          </p>
        )}
      </article>
    </Link>
  )
}
