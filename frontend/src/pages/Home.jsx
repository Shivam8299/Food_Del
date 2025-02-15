import React, { useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import FoodDesplay from '../components/FoodDesplay'

function Home() {
  const [category, setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDesplay category={category}/>
    </div>
  )
}

export default Home