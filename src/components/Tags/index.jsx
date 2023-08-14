import styles from './Tags.module.scss'
import PropTypes from 'prop-types'

export default function Tags({ tags, filtraFotos, tagSelecionada }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por função: {tagSelecionada}</p>
      <ul className={styles.tags__lista}>
        <li onClick={() => filtraFotos()}>Todas</li>
        {tags.map(tag => {
          return (
            <li key={tag} onClick={() => filtraFotos(tag)}>
              {tag}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  filtraFotos: PropTypes.func.isRequired,
  setItens: PropTypes.func.isRequired,
  tagSelecionada: PropTypes.string.isRequired
}
