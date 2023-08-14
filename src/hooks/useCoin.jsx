import { useContext, useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'

const CoinContext = createContext()

export function useCoin() {
  return useContext(CoinContext)
}

export function CoinProvider(props) {
  const coinLocalStorage = parseFloat(localStorage.getItem('coins')) || 0

  const [coins, setCoins] = useState(coinLocalStorage)

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins(prevCoins => prevCoins + 0.1)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('coins', coins.toFixed(1)) // Save rounded value
  }, [coins])

  const addCoins = amount => {
    setCoins(prevCoins => prevCoins + amount)
  }

  return (
    <CoinContext.Provider value={{ coins, addCoins }}>
      {props.children}
    </CoinContext.Provider>
  )
}

CoinProvider.propTypes = {
  children: PropTypes.node.isRequired
}
