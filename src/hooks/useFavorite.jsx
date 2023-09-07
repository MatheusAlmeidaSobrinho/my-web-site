import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocalStorageContext } from './useLocalStorage' // Importe o contexto do localStorage

const FavoriteContext = createContext()

export function useFavorite() {
  return useContext(FavoriteContext)
}

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([])
  const { setItem, getItem } = useLocalStorageContext() // Use as funções de localStorage

  useEffect(() => {
    // Carregue os favoritos do localStorage quando o componente for montado
    const storedFavorites = getItem('favorites')
    if (storedFavorites) {
      setFavorites(storedFavorites)
    }
  }, [])

  const toggleFavorite = animeNome => {
    if (favorites.includes(animeNome)) {
      // Remove o anime dos favoritos se já estiver na lista
      const newFavorites = favorites.filter(nome => nome !== animeNome)
      setFavorites(newFavorites)
      // Atualize o localStorage com os novos favoritos
      setItem('favorites', newFavorites)
    } else {
      // Adiciona o anime aos favoritos se não estiver na lista
      const newFavorites = [...favorites, animeNome]
      setFavorites(newFavorites)
      // Atualize o localStorage com os novos favoritos
      setItem('favorites', newFavorites)
    }
  }

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}

FavoriteProvider.propTypes = {
  children: PropTypes.node.isRequired
}
