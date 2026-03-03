import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgSeaFood from '../../assets/seafood-banner.jpg'

const SeeFood = () => {
  return (
    <div>
        <CategoryPage title="Thịt và Hải sản" bgImage={bgSeaFood} categories={'Thịt và Hải sản'}/>
    </div>
  )
}

export default SeeFood