import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { PopularMovies, imagepath } from './components/Url';
import { Context } from './Mainpage';
import { Pop } from './Pop';


const Banner = () => {
 
  const {banner} = useContext(Context)
  const [ban, setban] = useState([]);
  

  useEffect(() => {
    axios.get(PopularMovies).then(res=>setban(res.data.results))
  }, []);

 console.log(ban);
 const object=ban[0]
 const randomIndex = Math.floor(Math.random() * ban.length);
 const effect=ban[randomIndex];

 console.log(object)
  return (
  <div style={{height:'100%',width:'100%'}}>
   {object && banner &&    <div  style={{
    backgroundImage: `url(${imagepath + (effect?.backdrop_path || effect?.poster_path)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
   }}>
       
   </div>}
</div>
   

    


   
       
      
  );
};

export default Banner;
