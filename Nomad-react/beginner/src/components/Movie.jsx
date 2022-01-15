import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Movie = ({ id, title, coverImg, genres, summary }) => {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImg} alt="poster" />
      {genres.map(g => (
        <span key={g}>{g}</span>
      ))}
      <p>{summary}</p>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie