import React, { useEffect, useState } from 'react'
import back_arrow_icon from '../assets/back_arrow_icon.png'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

function Player() {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODVmNTQ0ZWFkYzI3Nzg2NWYxNTAyNWY0OWUzNTQ5NCIsIm5iZiI6MTcyNjMwMTQxNS45OTU2MDEsInN1YiI6IjY2YmIwODgwM2UyZWU5ZTdhY2I3ODU1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gdxge__bs04IuGRtJuCCCk6flkPGRAkFPk-gTkaeKvY'
    }
  };
  
  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response =>setApiData(response.results[0]))
    .catch(err => console.error(err));
    
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={() => {navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData. published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
