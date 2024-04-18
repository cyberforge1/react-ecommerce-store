import React from 'react'
import styles from './FavoritesPage.module.scss'
import FavoritesContainer from '../../containers/FavoritesContainer/FavoritesContainer'

const FavoritesPage = () => {
  return (
    <div className={styles.favorites}>
      <FavoritesContainer />
    </div>
  )
}

export default FavoritesPage