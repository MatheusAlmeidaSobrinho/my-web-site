import { useCoin } from '../../hooks/useCoin'
import products from './products.json'

const Store = () => {
  const { coins, addCoins } = useCoin()

  const buyItem = itemValue => {
    if (coins >= itemValue) {
      addCoins(-itemValue) // Subtrai o valor do item das moedas ao comprar
      alert('Item comprado com sucesso!')
    } else {
      alert('Você não tem moedas suficientes para comprar este item.')
    }
  }

  const handleFavorite = itemId => {
    // Lógica para marcar o item como favorito
    alert(`Item ${itemId} favoritado!`)
  }

  return (
    <div>
      <h2>Loja</h2>
      <p>Moedas disponíveis: {coins.toFixed(2)}</p>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>Valor: {product.value} moedas</p>
            <button onClick={() => buyItem(product.value)}>Comprar</button>
            <button onClick={() => handleFavorite(product.id)}>
              Favoritar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Store
