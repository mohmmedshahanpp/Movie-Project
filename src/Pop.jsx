import React, { createContext, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { PopularMovies } from "./components/Url";
import { useState, useEffect } from "react";
import axios from "axios";
import { imagepath } from "./components/Url";
import { Link } from "react-router-dom";
import { Context } from "./Mainpage";

export const Pop = ({url,a,b}) => {
   const {setbanner}=useContext(Context)
   setbanner(false)
  const {filter,setfilter,pop,setpop,search}=useContext(Context)
  const data = pop.filter((item)=>(item?.original_title?.toLowerCase() || item?.name?.toLowerCase()).includes(search.toLowerCase()))
  useEffect(() => {
    axios.get(url).then((abc) => setpop(abc.data.results));
  }, [url]);
  const add=(id)=>{
    console.log(pop)
    const filt=pop.filter((item)=>item.id===id)
    setfilter(filt)
   
  }
  console.log(filter)

  console.log(pop);

  return (
    <div style={{marginLeft:'20%'}} >

      {data.map((item) => {
        return (
          <Card
            style={{
              width: "18rem",
              float:'left',
              margin: "15px",
              width: "250px",
              height: "300px",
            }}
          >
            <Card.Img variant="top" src={imagepath + item.backdrop_path || imagepath + item.poster_path} />
            <Card.Body>
              <Card.Title>{item.original_title || item.name}</Card.Title>
              <Card.Text>{item.release_date || item.first_air_date}</Card.Text>
             <Link to='/det'><Button variant="primary" onClick={()=>add(item.id)} >Go to</Button></Link> 
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
