import { useState } from 'react'
import PropTypes from 'prop-types'
import './AnimeGeneric.scss'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useFavorite } from '../../hooks/useFavorite'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'

function AnimeGeneric({ nome, temporadas }) {
  const { theme } = useTheme()
  const [isAnimeOpen, setIsAnimeOpen] = useState(false)
  const [temporadasAbertas, setTemporadasAbertas] = useState(
    new Array(temporadas.length).fill(false)
  )

  const toggleAnime = () => {
    setIsAnimeOpen(!isAnimeOpen)
  }

  const toggleTemporada = index => {
    const newTemporadasAbertas = [...temporadasAbertas]
    newTemporadasAbertas[index] = !newTemporadasAbertas[index]
    setTemporadasAbertas(newTemporadasAbertas)
  }

  const { favorites, toggleFavorite } = useFavorite()
  const isFavorite = favorites.includes(nome)

  const handleToggleFavorite = () => {
    toggleFavorite(nome)
  }

  return (
    <div className={`container-anime-generic ${theme}`}>
      <div className="name-plus-favorite">
        <h2 onClick={toggleAnime}>{nome}</h2>
        <span onClick={handleToggleFavorite}>
          {isFavorite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
        </span>
      </div>
      {isAnimeOpen && (
        <div className="container-temporada-generic">
          {temporadas.map((temporada, index) => (
            <div key={index} className="container-episodio-generic">
              <h2 onClick={() => toggleTemporada(index)}>{temporada.nome}</h2>
              {temporadasAbertas[index] && (
                <div className="episodio-generic-p">
                  {temporada.episodios.map((episodio, idx) => (
                    <Link
                      key={idx}
                      to={`${nome}-${temporada.nome}-${episodio}`}
                    >
                      {episodio}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

AnimeGeneric.propTypes = {
  nome: PropTypes.string.isRequired,
  temporadas: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      episodios: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    })
  ).isRequired
}

export default AnimeGeneric
