import React, {useEffect, useContext, useState} from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbars/Navbars'
import MovieList from '../../components/MovieLists/MovieList'
import Footer from '../../components/Footer/Footer'
import Pagination from '../../components/Pagination/Pagination'
import {AppsData} from '../../utils/context/appDataContext'
import {scrollTop} from '../../utils/common/common'
import {getDataPage} from '../../utils/apis/api'

export default function Popular() {
  const {setActiveRoute} = useContext(AppsData)
  const [data, setData] = useState({
    isSet: false,
    data: {},
    totalpages: 10
  })

  useEffect(()=>{
    setActiveRoute('TV - Popular')
    if(!data.isSet) {
      async function gData (){
        let a = await getDataPage('/tv/popular', 1)
        setPageData(a.data)
      }
      gData()
    } 
  },[])

  function setPageData (val) {
    setData({
      ...data,
      isSet: true,
      data: val,
      totalpages: val.total_pages
    })
  }

  async function getNewData(val){
    let a = await getDataPage('/tv/popular', val)
    console.log(a.data)
    setPageData(a.data)
    scrollTop()
  } 

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | TV Shows - Popular</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main page-padding">
        <Navbar />  
        { Object.keys(data.data).length !== 0 ? 
            <MovieList 
              viewBtn={false}
              hlink='/[movies]/popular'
              aslink='/tv-shows/popular'
              type='tv-show'
              title={'Popular Shows'}
              total={data.data.total_results}
              data={data.data.results}/> : null
        }
        <Pagination 
          click={(val=>getNewData(val))}
          totalpages={data.totalpages} />
        <Footer />
      </div>
    </div>
  )
}

