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
      {/* 요약 문자의 길이가 235개를 넘어가면 자르고 말줄임표(...)를 보여준다. */}
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
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
