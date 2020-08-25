import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import {AppsData} from '../utils/context/appDataContext'

export default function Popular() {
  const {setActiveRoute} = useContext(AppsData)

  useEffect(()=>{
    setActiveRoute('Popular')
  })
  
  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Popular Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main">
        <Navbar />  
        <div className="div1"></div>
        <div className="div2"></div>
      </div>



    </div>
  )
}