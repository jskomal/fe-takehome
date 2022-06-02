import React, { useState, useEffect } from 'react'
import { Header } from './Header'
import './App.css'
import { Articles } from './Articles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleArticle from './SingleArticle'

export type Article = {
  id: number
  title: string
  byline: string
  abstract: string
  date: string
  img: string
  imgCaption: string
  subsection?: string
}

type APIResponse = {
  [key: string]: string | Multimedia[]
  multimedia: Multimedia[]
}

type Multimedia = {
  url: string
  caption: string
}

export const ArticleContext = React.createContext<Article[] | null>(null)

const App = () => {
  const [articles, setArticles] = useState<Article[] | null>(null)
  const [searchedArticles, setSearchedArticles] = useState<Article[] | null>(null)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          setErrorMsg('Something went wrong, please try again later')
        }
      })
      .then((data) => {
        const results = data.results.map((story: APIResponse, index: number) => {
          return {
            id: index,
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
        setSearchedArticles(results)
      })
      .catch((err) => {
        setErrorMsg('Something went wrong, please try again later')
        throw new Error(err)
      })
  }, [])

  const filterSearch = (input: string) => {
    const results = articles?.filter((story) =>
      story.title.toLowerCase().includes(input.toLowerCase())
    )
    if (results !== undefined) {
      setSearchedArticles(results)
    } else {
      setErrorMsg('No results found')
    }

    if (input === '') {
      setSearchedArticles(articles)
    }
  }

  return (
    <div>
      <BrowserRouter>
        <ArticleContext.Provider value={articles}>
          <Header />
          <Routes>
            <Route
              path='/'
              element={
                <Articles articles={searchedArticles} filterSearch={filterSearch} />
              }
            />
            <Route path='articles/:id' element={<SingleArticle />} />
          </Routes>
        </ArticleContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
