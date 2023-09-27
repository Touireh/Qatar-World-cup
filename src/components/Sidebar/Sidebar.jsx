import { WbSunny, Close, Dashboard, GTranslate ,  SportsSoccer, SportsEsports } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./sidebar.scss"

const Sidebar = ({ toggler, closeNav }) => {
  return (
    <div className={ toggler ? "sidebar open" : "sidebar"}>
      <div className="top">
        <IconButton aria-label='close' onClick={closeNav} className='close' size='small'>
          <Close fontSize='inherit' />
        </IconButton>
        <span className="logo">
          <SportsSoccer className='logoBall' />
          QaTaR<span className='logoSpan'>WC</span>
        </span>
      </div>
      <div className="hr">
        <hr />
      </div>

      <div className="center">
        <ul>
          <p className='title'>
            Main
          </p>
          <div className="listItems">
            <NavLink to={'/apropos'} className={({ isActive }) => isActive ? "active" : undefined}>
              <li>
                <Dashboard className='icon' />
                <span>
                  Home
                </span>
              </li>

            </NavLink>

            <NavLink to={'/'} className={({ isActive }) => isActive ? "active" : undefined}>
              <li>
                <SportsSoccer className='icon' />
                <span>
                  Matches
                </span>
              </li>


            </NavLink>


            <NavLink to={'/news'} className={({ isActive }) => isActive ? "active" : undefined}>
            <li>
              <GTranslate className='icon' />
              <span>
                Traduction
              </span>
            </li>
            </NavLink>

            <NavLink to={'/Game'} className={({ isActive }) => isActive ? "active" : undefined}>
            <li>
              <SportsEsports className='icon' />
              <span>
                FlagGame
              </span>
            </li>
            </NavLink>
            <NavLink to={'/profile'} className={({ isActive }) => isActive ? "active" : undefined}>
              <li>
                <WbSunny className='icon' />
                <span>
                  Weather
                </span>
              </li>
            </NavLink>
            <NavLink to={'/Hotel'} className={({ isActive }) => isActive ? "active" : undefined}>
              <li>
                <WbSunny className='icon' />
                <span>
                  Hotel
                </span>
              </li>
            </NavLink>

          </div>

    {/*    <p className='title'>
            Account
          </p>
          <div className="listItems">
         
            
          <Link to={'/'}>
              <li>
                <Receipt className='icon' />
                <span>
                  Transactions
                </span>
              </li>
            </Link>

            
            <Link to={'/'}>
              <li>
                <Logout className='icon' />
                <span>
                  Logout
                </span>
              </li>
            </Link>
          </div>*/  }
        </ul>
      </div>
      {/* <div className="bottom">
        <div>
          Box
        </div>
      </div> */}
    </div>
  )
}

export default Sidebar