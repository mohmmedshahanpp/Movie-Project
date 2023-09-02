import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {LatestMovies, imagepath} from './components/Url'
import { useState,useEffect } from 'react'
import axios from 'axios'

export const Lat = () => {
  const [lat, setlat] = useState([

  ])
  useEffect(() => {
    axios.get(LatestMovies).then((def)=>setlat(def.data.results))
  }, [])
  
  console.log(lat)

  return (
    <div>
      {lat.map((item)=>{
        return (
          <Card style={{ width: '18rem',float:'left',margin:'15px',width:'250px',height:'300px' }}>
      <Card.Img variant="top" src={imagepath + item.backdrop_path || imagepath + item.poster_path} />
      <Card.Body>
        <Card.Title>{item.original_title || item.name}</Card.Title>
        <Card.Text>
        {item.release_date || item.first_air_date}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        )
      })}
         
    </div>
  )
}
