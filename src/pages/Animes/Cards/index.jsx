import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Cards({ itens, styles }) {
  // Agrupar os itens pelo valor da tag
  const groupedItens = itens.reduce((grouped, item) => {
    if (!grouped[item.tag]) {
      grouped[item.tag] = []
    }
    grouped[item.tag].push(item)
    return grouped
  }, {})

  return (
    <div>
      {/* Renderizar cada lista separadamente */}
      {Object.entries(groupedItens).map(([tag, itemList]) => (
        <div key={tag}>
          <h2>{tag}</h2>
          <ul className={styles.ToolsIA__cards}>
            {itemList.map(item => (
              <li key={item.id} className={styles.ToolsIA__card}>
                <img
                  className={styles.ToolsIA__imagem}
                  src={item.imagem}
                  alt={item.title}
                />
                <div className={styles.ToolsIA__description}>
                  <p>{item.title}</p>
                  <p>{item.function}</p>
                  <Link to="/">Ver</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

Cards.propTypes = {
  itens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  styles: PropTypes.object.isRequired
}
