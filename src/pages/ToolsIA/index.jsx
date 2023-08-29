import Tags from '../../components/Tags'
import styles from './ToolsIA.module.scss'
import fotos from './fotos.json'
import Cards from './Cards'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import { contents } from '../../assets/translate/contents'

export default function ToolsIA() {
  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map(valor => valor.tag))]
  const [tagSelecionada, setTagSelecionada] = useState('Todas')
  const { currentLanguage } = useLanguage()

  const filtraFotos = tag => {
    if (!tag) {
      // Se o parâmetro "tag" for undefined, define a tag selecionada como "Todas"
      setItens(fotos)
      setTagSelecionada('Todas')
    } else {
      const novasFotos = fotos.filter(foto => foto.tag === tag)
      setItens(novasFotos)
      setTagSelecionada(tag)
    }
  }

  return (
    <section className={styles.ToolsIA}>
      <h3>
        {contents.tools.previewInfo[currentLanguage]}
        <Link> GPTE</Link>.
      </h3>
      <Tags
        tags={tags}
        filtraFotos={filtraFotos}
        setItens={setItens}
        tagSelecionada={tagSelecionada}
      />
      <Cards itens={itens} styles={styles} />
    </section>
  )
}
