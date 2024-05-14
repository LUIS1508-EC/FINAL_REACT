import React from 'react'
const AnimeLists = ({ animelists,setAnimeInfo,animeComponent,handleList}) => {
  const AddToList=animeComponent;
  return (
    <>
      {
        animelists ? (
          animelists.map((anime, index) => {
            return (
              <div className="card" key={index} onClick={()=>setAnimeInfo(anime)}>
                <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                <div className="anime-info">
                  <h5>{anime.title}</h5>
                  <div className="overlay" onClick={()=>handleList(anime)}>
                      <h4>{anime.title_japanese}</h4>
                      <h3>SINOPSIS</h3>
                      <div className="synopsis">
                        <p>{anime.synopsis}</p>
                      </div>
                      <AddToList/>
                  </div>

                </div>
              </div>
            )
          })
        ) : "Not Found"
      }

    </>
  )
}
export default AnimeLists