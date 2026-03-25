import React from 'react'
import Hero from '../components/Hero'
import ExploreCategories from '../components/Explore'
import PopularTours from '../components/PopularTours'

const Home = () => {
  return (
    <div>
        <Hero />
        <ExploreCategories />
        <PopularTours />
    </div>
  )
}

export default Home