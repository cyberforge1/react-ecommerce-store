import React from 'react'
import styles from './HomePage.module.scss'
import Carousel from '../../components/Carousel/Carousel'
import ProductContainer from '../../containers/ProductContainer/ProductContainer'
import ProductsAll from '../../components/ProductsAll/ProductsAll'

const HomePage = () => {

  const slides = [
    <img src="https://cdn.midjourney.com/145b9cbf-e5b7-40d1-979b-5557ec69fcb0/0_2.webp" alt="Slide 1" />,
    <img src="https://cdn.midjourney.com/145b9cbf-e5b7-40d1-979b-5557ec69fcb0/0_1.webp" alt="Slide 2" />,
    <img src="https://cdn.midjourney.com/a557a95f-244d-4656-b551-efedcdb90b4a/0_0.webp" alt="Slide 3" />
  ];



  return (
    <div className={styles.homepage}>
      <Carousel slides={slides} />
      <ProductContainer>
        <ProductsAll />
      </ProductContainer>
    </div>
  )
}

export default HomePage