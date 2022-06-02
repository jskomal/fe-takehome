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
      <img
        className='single-img'
        src={currentArticle?.img}
        alt={currentArticle?.imgCaption}
      />
      <h1>{currentArticle?.title}</h1>
      <p>{currentArticle?.imgCaption}</p>
      <div className='single-pair'>
        <h3>{currentArticle?.byline}</h3>
        <h3>{dayjs(currentArticle?.date).format('MMM D, YYYY')}</h3>
      </div>
      <p>{currentArticle?.abstract}</p>
    </div>
  )
}

export default SingleArticle
