import { useState } from 'react'
import PropTypes from 'prop-types'
import './AnimeGeneric.scss'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useFavorite } from '../../hooks/useFavorite'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import { BsWikipedia } from 'react-icons/bs'
import StarsRating from '../StarsRating/StarsRating'

function AnimeGeneric({ nome, temporadas, dados }) {
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
      <div className="data-anime">
        <div onClick={toggleAnime} className="anime-data">
          <div className="data-banner-anime">
            <img src={dados.imagem} alt="" />
          </div>
          <div className="data-container-anime">
            <h2>{nome}</h2>
            <p>{dados.dtLanc}</p>
            <div className="star-container">
              <StarsRating score={dados.score} />
            </div>
            <p>{dados.genders}</p>
          </div>
        </div>
        <div className="data-container-favorite">
          <span onClick={handleToggleFavorite}>
            {isFavorite ? (
              <MdFavorite size={24} />
            ) : (
              <MdOutlineFavoriteBorder size={24} />
            )}
          </span>
          <Link to={dados.linkWiki} target="_blank">
            <BsWikipedia size={24} />
          </Link>
        </div>
      </div>
      {isAnimeOpen && (
        <div className="container-temporada-generic">
          {temporadas.map((temporada, index) => (
            <div key={index} className="container-episodio-generic">
              <h2 onClick={() => toggleTemporada(index)}>{temporada.nome}</h2>
              {temporadasAbertas[index] && (
                <div className="episodio-generic-p">
                  {temporada.episodios.map((episodio, idx) => (
                    <Link key={idx} to={temporada.link}>
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
  ).isRequired,
  dados: PropTypes.shape({
    imagem: PropTypes.string.isRequired,
    dtLanc: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    genders: PropTypes.string.isRequired,
    linkWiki: PropTypes.string.isRequired
  }).isRequired
}

export default AnimeGeneric
