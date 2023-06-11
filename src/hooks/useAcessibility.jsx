import { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

// Criação do Contexto
const AcessibilityContext = createContext()

// Criação do Provedor para o Contexto
export function AcessibilityProvider(props) {
  const acessibilityLocalStorage = localStorage.getItem('acessibility')

  // State que irá controlar qual Acessibilidade a aplicação está usando
  const [acessibility, setAcessibility] = useState(
    acessibilityLocalStorage === null ? 'normal' : acessibilityLocalStorage
  )

  const acessibilityAllowed = ['normal', 'lower', 'upper', 'zoom']

  function changeAcessibility(acessibilityRecieved) {
    const acessibilityIsAllowed =
      acessibilityAllowed.includes(acessibilityRecieved)

    if (acessibilityRecieved !== acessibility && acessibilityIsAllowed) {
      setAcessibility(acessibilityRecieved)
      localStorage.setItem('acessibility', acessibilityRecieved)
    }
  }

  return (
    <AcessibilityContext.Provider value={{ acessibility, changeAcessibility }}>
      {props.children}
    </AcessibilityContext.Provider>
  )
}

AcessibilityProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export function useAcessibility() {
  const context = useContext(AcessibilityContext)

  return context
}
