import dayjs from 'dayjs'
import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ArticleContext } from './App'
import './SingleArticle.css'

const SingleArticle = () => {
  const location = useLocation()
  const index = parseInt(location.pathname.replace(/\D/g, ''))
  const articles = useContext(ArticleContext)
  let currentArticle
  if (articles !== null) currentArticle = articles[index]

  return (
    <div className='single-view'>
      <h1>{currentArticle?.title || 'No title provided'}</h1>
      <img
        className='single-img'
        src={currentArticle?.img}
        alt={currentArticle?.imgCaption}
      />
      <p>{currentArticle?.imgCaption || 'No caption provided'}</p>
      <div className='single-pair'>
        <h3>{currentArticle?.byline || 'No author provided'}</h3>
        <h3>{dayjs(currentArticle?.date).format('MMM D, YYYY') || 'No date provided'}</h3>
      </div>
      <p>{currentArticle?.abstract || 'No content provided'}</p>
      <a href={currentArticle?.url}>Link to the New York Times article</a>
    </div>
  )
}

export default SingleArticle
