import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import CourseSlider from '../components/CourseSlider'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <CourseSlider/>
      <Footer/>
    </>
  )
}

export default Home