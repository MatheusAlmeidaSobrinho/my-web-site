import { useState } from 'react'
import AnimeGeneric from '../../components/AnimeGeneric'
import './Anime.scss'
import listAnime from './listAnime.json'
import { useTheme } from '../../hooks/useTheme'

export default function Animes() {
  const { animes } = listAnime

  const [search, setSearch] = useState('')

  const handleSearchChange = e => {
    setSearch(e.target.value)
  }

  const regex = new RegExp(
    search
      .split('')
      .map(c => `${c}[a-z]*`)
      .join(''),
    'i'
  )

  const filteredAnimes =
    search.length > 0 ? animes.filter(anime => regex.test(anime.nome)) : animes

  const { theme } = useTheme()

  return (
    <div className={`anime-page ${theme}`}>
      <div className="anime-search-container">
        <p>{`Realize a busca ao lado se preferir ^^`}</p>
        <input
          type="text"
          placeholder="Buscar"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      {filteredAnimes.map((anime, index) => (
        <AnimeGeneric
          key={index}
          nome={anime.nome}
          temporadas={anime.temporadas}
          itemType="Anime"
        />
      ))}
    </div>
  )
}
