import { useCoin } from '../../hooks/useCoin'
import { useTheme } from '../../hooks/useTheme'
import coinDark from '../../assets/images/coinDark.svg'
import coinLight from '../../assets/images/coinLight.svg'
import './CoinCounter.scss'

const CoinCounter = () => {
  const { coins } = useCoin()
  const { theme } = useTheme()

  return (
    <div className={`coin-counter ${theme}`}>
      {theme === 'dark' ? (
        <img src={coinDark} width="34" alt="Renew" />
      ) : (
        <img src={coinLight} width="34" alt="Renew" />
      )}
      {coins < 100 ? (
        <div className="coin-value">
          <p>{coins.toFixed(2)} Rank Bronze</p>
        </div>
      ) : coins >= 100 && coins < 250 ? (
        <div className="coin-value">
          <p>{coins.toFixed(2)} Rank Silver</p>
        </div>
      ) : (
        <div className="coin-value">
          <p>{coins.toFixed(2)} Rank Gold</p>
        </div>
      )}
    </div>
  )
}

export default CoinCounter
