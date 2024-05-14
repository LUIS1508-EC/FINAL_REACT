import React from 'react'

const AnimeInfo = (props) => {
    const {title,images:{jpg:{large_image_url}},source,rank,score,popularity,members,status,rating,duration}=props.animeInfo
  return (
    <>
        <div className="anime-content">
            <h3>{title}</h3><br />
            <img src={large_image_url} alt="" /><br /><br />
            <div className="info">
                <h3>#Ranking: {rank}</h3>
                <h3>#Puntaje: {score}</h3>
                <h3>#Popularidad: {popularity}</h3><hr/><br />
                <h4>Miembros:{members}</h4>
                <h4>Tipo:{source}</h4>
                <h4>Duración:{duration}</h4>
                <h4>Estado:{status}</h4>
                <h4>Edades:{rating}</h4>
            </div>
        </div>
    </>
  )
}
export default AnimeInfo