import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import PropTypes from 'prop-types'

function StarsRating({ score }) {
  const maxStars = 10 // Total de estrelas
  const filledStars = Math.floor(score) // Número de estrelas preenchidas

  // Cria um array de estrelas preenchidas
  const filledStarsArray = Array.from({ length: filledStars }, (_, index) => (
    <AiFillStar key={`filled-${index}`} className="filled" />
  ))

  // Cria um array de estrelas apagadas com base na parte decimal da pontuação
  const emptyStarsArray = Array.from(
    { length: maxStars - filledStars },
    (_, index) => <AiOutlineStar key={`empty-${index}`} className="empty" />
  )

  return (
    <div className="stars-rating">
      {filledStarsArray.concat(emptyStarsArray)}
      <p>{score.toFixed(1)} / 10</p>
    </div>
  )
}

// Defina os PropTypes para o componente
StarsRating.propTypes = {
  score: PropTypes.number.isRequired // Espera que 'score' seja um número e seja obrigatório
}

export default StarsRating
