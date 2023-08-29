import styles from './Tags.module.scss'
import PropTypes from 'prop-types'
import { useLanguage } from '../../hooks/useLanguage'
import { contents } from '../../assets/translate/contents'

export default function Tags({ tags, filtraFotos, tagSelecionada }) {
  const { currentLanguage } = useLanguage()

  return (
    <div className={styles.tags}>
      <p>
        {contents.tools.previewTag[currentLanguage]}
        {tagSelecionada}
      </p>
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
