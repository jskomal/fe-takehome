import React from 'react'
import { Article } from './App'

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
    <article>
      <img src={img} alt={imgCaption} />
      <h3>{title}</h3>
      <div>
        <p>{byline}</p>
        <p>{date}</p>
      </div>
      <p>{abstract}</p>
    </article>
  )
}
