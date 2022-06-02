import React from 'react'
import './Articles.css'
import { Article } from './App'
import { Card } from './Card'

interface Props {
  articles: Article[] | null
}

export const Articles = ({ articles }: Props) => {
  let cards
  if (articles !== null) {
    cards = articles.map((story) => {
      return (
        <Card
          id={story.id}
          key={story.id}
          title={story.title}
          byline={story.byline}
          abstract={story.abstract}
          date={story.date}
          img={story.img}
          imgCaption={story.imgCaption}
          subsection={story.subsection || 'Arts'}
        />
      )
    })
  }

  return <section className='article-view'>{cards}</section>
}
