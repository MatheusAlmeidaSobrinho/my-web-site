import { useContext, useState, createContext } from 'react'
import PropTypes from 'prop-types'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const currentLanguageSaved = localStorage.getItem('currentLanguage')
  const [currentLanguage, setCurrentLanguage] = useState(
    currentLanguageSaved === null ? 'english' : currentLanguageSaved
  )
  const languagesAllowed = ['portuguese', 'english']

  function changeCurrentLanguage(language) {
    const languageIsAllowed = languagesAllowed.includes(language)

    if (language !== currentLanguage && languageIsAllowed) {
      setCurrentLanguage(language)
      localStorage.setItem('currentLanguage', language)
    }
  }

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, changeCurrentLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  return context
}
