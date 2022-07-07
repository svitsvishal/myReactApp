import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
//import { Navbar } from '../Components/Navbar'
import {Navbar} from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <div>
      <Announcement/>
 <Navbar></Navbar>
 <Slider/>
 <Categories/>
 <Products/>
   <Newsletter/>
    </div>
  )
}

export default Home