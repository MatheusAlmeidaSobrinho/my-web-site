import { useCoin } from '../../hooks/useCoin'
import coin from '../../assets/images/coin.svg'
import './CoinCounter.scss'

const CoinCounter = () => {
  const { coins } = useCoin()

  return (
    <div className="coin-counter">
      <img src={coin} width="38" alt="Renew" />
      <div className="coin-value">{coins.toFixed(2)}</div>
    </div>
  )
}

export default CoinCounter
