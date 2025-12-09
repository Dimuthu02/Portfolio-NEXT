'use client'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Fotter from '@/components/Fotter'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Work from '@/components/Work'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Fotter/>
    </>
  )
}

export default page
