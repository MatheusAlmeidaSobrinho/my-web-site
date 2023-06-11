import { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const LocalStorageContext = createContext()

const useLocalStorage = () => {
  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const getItem = key => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }

  return { setItem, getItem }
}

export const useLocalStorageContext = () => useContext(LocalStorageContext)

export const LocalStorageProvider = ({ children }) => {
  const localStorageFunctions = useLocalStorage()

  LocalStorageProvider.propTypes = {
    children: PropTypes.node.isRequired
  }

  return (
    <LocalStorageContext.Provider value={localStorageFunctions}>
      {children}
    </LocalStorageContext.Provider>
  )
}
