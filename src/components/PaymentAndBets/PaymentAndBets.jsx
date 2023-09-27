import React from 'react'
import NewComponent from '../CreditCard/CreditCard'
import BetSlip from '../BetSlip/BetSlip'
import './paymentandbets.scss'



const PaymentAndBets = () => {

  return (
    <div className='paymentandbets'>

        <NewComponent />

        <BetSlip />
    </div>
  )
}

export default PaymentAndBets