import React, { createContext ,useState} from 'react'
import { Lat } from './Lat'
import { Pop } from './Pop'
import { Com } from './Com'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navb from './Navb'
import { ComedyMovies, LatestMovies, PopularMovies } from './components/Url'
import { Details } from './components/Details'
import Banner from './Banner'

const Context=createContext()
export const Mainpage = () => {
  const [banner, setbanner] = useState(true)
  const [filter, setfilter] = useState([])
  const [search, setsearch] = useState("")
   
  const [pop, setpop] = useState([]);

  return (
    <div>
<Context.Provider value={{filter,setfilter,pop,setpop,banner,setbanner,search,setsearch}}>
     <BrowserRouter>
     <Navb/>
     <Banner/>
      <Routes>
     <Route path="/pop" element={<Pop url={PopularMovies} />}></Route>
     <Route path="/lat" element={<Pop url={LatestMovies} />}></Route>
     <Route path="/com" element={<Pop url={ComedyMovies} />}></Route>
     <Route path="/det" element={<Details />}></Route>     
     </Routes>
     
     </BrowserRouter>
     </Context.Provider>
    </div>
  )
}
export { Context }
