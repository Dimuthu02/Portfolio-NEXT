'use client'
import About from '@/components/About'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
    </>
  )
}

export default page
