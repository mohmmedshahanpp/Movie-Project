import React, { useContext } from 'react'
import { Context } from '../Mainpage'
import { imagepath } from './Url'

export const Details = () => {

    const {filter}=useContext(Context)
    const [filtdata]=filter
    console.log("filtdata:", filtdata);
  return (
    <div>
        <h1 style={{textAlign:'center'}}>{filtdata.original_title || filtdata.name}</h1>
      <div style={{width:750,height:400,marginLeft:'20%',marginTop:'5px'}}>
        <img src={imagepath + filtdata.backdrop_path || imagepath + filtdata.poster_path} style={{width:'100%',height:'100%'}} />
      </div>
      <div style={{textAlign:'center',backgroundColor:'black',color:'white',width:"100%",height:'40%',marginTop:'8px'}}>
        <h4>{filtdata.overview}</h4>
        <h4>Language:{filtdata.original_language}</h4>
        <h4>Vote avg:{filtdata.vote_average}</h4>
        <h4>Vote count:{filtdata.vote_count}</h4>
        <h4>{filtdata.release_date || filtdata.first_air_date}</h4>
      </div>
    </div>
  )
}

