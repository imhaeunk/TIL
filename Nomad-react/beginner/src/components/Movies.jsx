import React, { useEffect, useState } from 'react'
import Movie from './Movie'

const Movies = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
    const json = await response.json()
    setMovies(json.data.movies)
    setLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])
  console.log(movies)
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImg={movie.small_cover_image}
              genres={movie.genres}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Movies
