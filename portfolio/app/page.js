'use client'
import About from '@/components/About'
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
    </>
  )
}

export default page
