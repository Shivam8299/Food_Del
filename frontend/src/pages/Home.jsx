import React, { useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import FoodDesplay from '../components/FoodDesplay'

function Home() {
  const [category, setCategory] = useState("All")
  return (
    <div className=' md:mx-16 lg:mx-32 mx-1'>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDesplay category={category}/>
    </div>
  )
}

export default Home