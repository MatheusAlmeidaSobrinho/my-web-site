import { useContext, useState, createContext } from 'react'
import PropTypes from 'prop-types'

// Criação do Contexto
const ThemeContext = createContext()

// Criação do Provedor para o Contexto
export function ThemeProvider(props) {
  const themeLocalStorage = localStorage.getItem('theme')
  // State que irá controlar qual Tema a aplicação está usando
  const [theme, setTheme] = useState(
    themeLocalStorage === null ? 'dark' : themeLocalStorage
  )

  const themesAllowed = ['dark', 'light', 'clean']

  function changeTheme(themeRecieved) {
    const themesIsAllowed = themesAllowed.includes(themeRecieved)

    if (themeRecieved !== theme && themesIsAllowed) {
      setTheme(themeRecieved)
      localStorage.setItem('theme', themeRecieved)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export function useTheme() {
  const context = useContext(ThemeContext)

  return context
}
