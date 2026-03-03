import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgAll from '../../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
        <CategoryPage title="Tất cả sản phẩm" bgImage={bgAll} categories={'Tất cả'}/>
    </div>
  )
}

export default AllProducts