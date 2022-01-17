import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Detail() {
  const { id } = useParams()
  const [detail, setDetail] = useState({})

  const getMovie = async () => {
    const {
      data: { movie }
    } = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
    setDetail(movie)
  }
  useEffect(() => {
    getMovie()
  }, [])

  return (
    <>
      <h1>Detail</h1>
      <div>{detail.title}</div>
    </>
  )
}

export default Detail
