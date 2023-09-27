import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './betslip.scss'
import { removeBet, updateStake } from '../../store/slices/betslipSlice';
import { useEffect } from 'react';

const BetSlip = () => {

    const dispatch = useDispatch()

    const [loadCode, setLoadCode] = useState('')

    const [value, setValue] = useState('1');

    const [toggleSlip, setToggleSlip] = useState(false)

    const [screenSize, setScreenSize] = useState(null)


    const bets = useSelector(state => state.betslip.bets)

    const totalOdds = useSelector(state => state.betslip.totalOdds)
    
    const totalAmount = useSelector(state => state.betslip.totalAmount)

    const stake = useSelector(state => state.betslip.stake)
    
    useEffect(() => {

        if (bets.length > 0) {
            setValue('2')
            
        }
         else {
            setValue('1')
        }
    
      
    }, [bets.length])

    useEffect(() => {
      
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)

    }, [])

    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleStake = (e) => {

        dispatch(updateStake(e.target.value))
    }

    const handleRemove = (id) => {
        dispatch(removeBet(id))
    }

    const handleToggleSlip = () => {

        
        if (screenSize > 1024) {
            const betslips = document.getElementById("betslips")
            betslips.scrollIntoView({ behavior: 'smooth'})
        } else {
            setToggleSlip(!toggleSlip)
        }
        
    }
    
    return (
        <>
            
        </>
)
}

export default BetSlip