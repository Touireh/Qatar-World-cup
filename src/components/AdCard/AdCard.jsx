import React from 'react'
import "./adcard.scss"
import wc2022 from '../../assets/images/wc2022.png'

const AdCard = () => {
  return (
    <div className='adcard'>
        <div className="adText">
            <b>HAYA 2022</b><br/>
            <h1>
              Welcome to Qatarwc
              The world cup 2022 will encourage international industry to flourish and encourage cultural exchange between Qatar and the rest of the world.
            </h1>
        </div>
        <div className="adImage">
          <img src={wc2022} alt="/" className='image' />
        </div>
    </div>
  )
}

export default AdCard