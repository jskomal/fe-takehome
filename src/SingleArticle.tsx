import dayjs from 'dayjs'
import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ArticleContext } from './App'

const SingleArticle = () => {
  const location = useLocation()
  const index = parseInt(location.pathname.replace(/\D/g, ''))
  const articles = useContext(ArticleContext)
  let currentArticle
  if (articles !== null) currentArticle = articles[index]

  return (
    <div>
      <h1>{currentArticle?.title}</h1>
      <img src={currentArticle?.img} alt={currentArticle?.imgCaption} />
      <p>{currentArticle?.imgCaption}</p>
      <h3>{currentArticle?.byline}</h3>
      <h3>{dayjs(currentArticle?.date).format('MMM D, YYYY')}</h3>
      <p>{currentArticle?.abstract}</p>
    </div>
  )
}

export default SingleArticle
