import React from 'react'
import Announcement from '../Components/Announcement'
//import { Navbar } from '../Components/Navbar'
import {Navbar} from '../Components/Navbar'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <div>
      <Announcement/>
 <Navbar></Navbar>
 <Slider/>
   
    </div>
  )
}

export default Home