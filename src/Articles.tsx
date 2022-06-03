import React from 'react'
import './Articles.css'
import { Article } from './App'
import { Card } from './Card'

type Props = {
  articles: Article[] | null
  filterSearch: (input: string) => void
}

export const Articles = ({ articles, filterSearch }: Props) => {
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
          url={story.url}
        />
      )
    })
  }

  return (
    <div>
      <div className='input-box'>
        <input
          className='search-bar'
          type='text'
          placeholder='search for an article'
          onChange={(e) => {
            filterSearch(e.target.value)
          }}
        />
      </div>
      <section className='article-view'>{cards}</section>
    </div>
  )
}
