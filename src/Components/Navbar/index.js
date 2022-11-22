import React from 'react'
import { Link } from 'react-router-dom'
import CartButton from './CartButton'
import FavButton from './FavButton'
import styles from './styles.module.css'
import { useProduct } from '../../Context/ProductContext'
import { useAuth } from '../../Context/AuthContext'
import { MenuIcon, XIcon, LogoutIcon } from '@heroicons/react/outline'

const Navbar = () => {
  const { categories, setCategory } = useProduct()
  // const { loggedIn, currentUser, setIsSubmitting, logout } = useAuth()

  // const handleLogout = async () => {
  //   setIsSubmitting(true)
  //   try {
  //     await logout()
  //   } catch {
  //     alert("Error")
  //   }
  //   setIsSubmitting(false)
  // }

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2 dark:bg-slate-700 fixed w-full z-20 top-0 left-0">

        {/* Header with Nav Links */}
        <div className="container my-1.5 flex flex-wrap items-center justify-between mx-auto">
          <div className={styles.logo}>
            <Link className={styles.link} to="/">
              <h1 className='text-yellow-400 text-4xl'>#markt</h1>
            </Link>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:bg-transparent">
              <li>
                <Link className={styles.link} to="/signin">
                  <h1 className='text-yellow-400 text-xl'>Signin</h1>
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/signup">
                  <h1 className='text-yellow-400 text-xl'>Signup</h1>
                </Link>
              </li>
            </ul>
            <div className="ml-3 relative">
              <FavButton />
            </div>
            <div className="ml-3 relative">
              <CartButton />
            </div>
          </div>
        </div>
  

        {/* line to divide header and category navigation */}
        <div className="bg-yellow-500 mx-auto h-[1.1px] shadow-sm shadow-zinc-900 px-12"></div>

        {/* Category Links */}
        <div className={styles.categoryNav}>
          <div>
            <Link
              className={styles.categoryLink}
              to="/"
              onClick={() => setCategory("")}
            >
              <h1 className="truncate">All</h1>
            </Link>
          </div>
          {categories &&
            categories.map((item, index) => {
              return (
                <div key={`${item}-${index}`}>
                  <Link
                    className={styles.categoryLink}
                    to={`/${item.toLowerCase()}`}
                    onClick={() => {
                      setCategory(item.toLowerCase());
                    }}
                  >
                    <h1 className="truncate">{item}</h1>
                  </Link>
                </div>
              );
            })}
        </div>
      </nav>

      {/* line at the bottom of category menu */}
      <div className="bg-zinc-900/10 mx-auto h-[1px] shadow-sm shadow-zinc-900/10 px-12"></div>
    </>
  );
};

export default Navbar;
