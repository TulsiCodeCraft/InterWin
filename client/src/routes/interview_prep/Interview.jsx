import React from 'react'
import Content from '../../components/Content'
import TopCompanies from '../../components/TrendingPosition'
import TrendingComp from '../../components/TrendingComp'


export default function Interview() {
  return (
    <>       
        <div className='bg-purple-50'>
        <Content/>
        <TopCompanies/>
        <TrendingComp/>
        </div>
    </>
  )
}
