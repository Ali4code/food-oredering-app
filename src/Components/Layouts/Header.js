import React from 'react'
import CartIcon from './CartIcon'
import Classes from './Header.module.css'
import MealsPhoto from '../../images/meals.webp'
const Header = () => {
  return (
    <React.Fragment>
      <div className={Classes.Header}>
        <p className=''>ReactMeals</p>
        <CartIcon />
      </div>
      <div className={Classes['img-container']}>
      <img src={MealsPhoto} className={Classes['header-img']} alt='table of foods' />
      </div>
      
    </React.Fragment>


  )
}

export default Header