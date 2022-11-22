import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { HeartIcon } from "@heroicons/react/outline"
import { useFavorite } from '../../../Context/FavoriteContext'

const FavButton = () => {
  const { favoriteItems } = useFavorite()

  return (
    <div className="justify-content-center mx-auto text-center">
      <div className={styles.favMenu}>
        <Link to="/favorites" className={styles.favButton}>
          <HeartIcon className={styles.favIcon} aria-hidden="true"  />
          <div className="flex flex-col self-center"> 
              {favoriteItems.length > 0 && (
               <span className={styles.favCount}>
                 {favoriteItems.length}
               </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default FavButton