import { createContext, useContext, useEffect, useState } from 'react'
import { useLocalStorageContext } from './useLocalStorage'
import PropTypes from 'prop-types'

const AuthContext = createContext()

const useAuth = () => {
  const { setItem, getItem } = useLocalStorageContext()
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    // Carregue o token de autenticação do localStorage ao inicializar o contexto
    const token = getItem('token')
    if (token) {
      setAuthenticated(true)
    }
  }, [])

  const login = (email, password) => {
    const user = getItem('user')
    if (user && user.email === email && user.password === password) {
      setItem('token', 'THEPOWEROFPOTATO')
      setAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('token')
    setAuthenticated(false)
  }

  const isAuthenticated = () => authenticated

  const register = user => {
    setItem('user', user)
  }

  return { login, logout, isAuthenticated, register }
}

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const authFunctions = useAuth()

  return (
    <AuthContext.Provider value={authFunctions}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
