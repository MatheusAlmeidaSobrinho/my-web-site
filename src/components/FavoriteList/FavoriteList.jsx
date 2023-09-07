import { useFavorite } from '../../hooks/useFavorite'

function FavoriteList() {
  const { favorites } = useFavorite()

  return (
    <div>
      <h2>Seus Animes Favoritos:</h2>
      <ul>
        {favorites.map(animeNome => (
          <li key={animeNome}>{animeNome}</li>
        ))}
      </ul>
    </div>
  )
}

export default FavoriteList
