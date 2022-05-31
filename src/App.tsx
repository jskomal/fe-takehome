import React, { useState, useEffect } from 'react'
import './App.css'

export interface Article {
  title: string
  byline: string
  abstract: string
  date: string
  img: string
  subsection?: string
}

function App() {
  const [articles, setArticles] = useState<Article[] | null>(null)

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <div className='App'>
      <h1>ARTS NEWS ALERT</h1>
    </div>
  )
}

export default App
