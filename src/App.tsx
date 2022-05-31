import React, { useState, useEffect } from 'react'
import './App.css'

export interface Article {
  title: string
  byline: string
  abstract: string
  date: string
  img: string
  imgCaption: string
  subsection?: string
}

function App() {
  const [articles, setArticles] = useState<Article[] | null>(null)

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((story: any) => {
          return {
            title: story.title,
            byline: story.byline,
            abstract: story.abstract,
            date: story.published_date,
            img: story.multimedia[1].url,
            imgCaption: story.multimedia[1].caption,
            subsection: story.subsection
          }
        })
        setArticles(results)
      })
  }, [])

  return (
    <div className='App'>
      <h1>ARTS NEWS ALERT</h1>
    </div>
  )
}

export default App
