import { Link } from 'react-router-dom'
import './Projects.scss'

import { useAcessibility } from '../../hooks/useAcessibility'
import { useTheme } from '../../hooks/useTheme'
import { useLanguage } from '../../hooks/useLanguage'

export default function Projects() {
  const { theme } = useTheme()
  const { acessibility } = useAcessibility()
  const { currentLanguage } = useLanguage()

  return (
    <div className={`project-page ${theme} ${acessibility} ${currentLanguage}`}>
      <div className="project-header">
        <button>
          <Link to="..">Voltar</Link>
        </button>
        <h3>Pagina de Projetos</h3>
        <button>
          <Link to="/projectOne">Avançar</Link>
        </button>
      </div>
      <div className="instructions-component">
        <h3>Como navegar?</h3>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s.
        </p>

        <div>
          <h3>Gerador de Senha</h3>
          <h3>Linguagens utilizadas</h3>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <h3>Funcionalidade</h3>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>

        <div>
          <h3>Calculadora</h3>
          <h3>Linguagens utilizadas</h3>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <h3>Funcionalidade</h3>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>

        <div>
          <h3>API GitHub</h3>
          <h3>Linguagens utilizadas</h3>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <h3>Funcionalidade</h3>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>

        <div>
          <h3>TravelGreen PI</h3>
          <h3>Linguagens utilizadas</h3>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <h3>Funcionalidade</h3>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
      </div>
    </div>
  )
}
