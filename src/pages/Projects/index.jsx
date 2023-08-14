import { Link } from 'react-router-dom'
import './Projects.scss'
import { contents } from '../../assets/translate/contents'

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
          <Link to="..">
            {contents.project.buttonBackProject[currentLanguage]}
          </Link>
        </button>
        <h3>{contents.project.titlePageProject[currentLanguage]}</h3>
        <button>
          <Link to="/projects/projectOne">
            {contents.project.buttonNextProject[currentLanguage]}
          </Link>
        </button>
      </div>
      <div className="instructions-component">
        <h2>{contents.project.howNavProject[currentLanguage]}</h2>
        <p>{contents.project.pHowNavProject[currentLanguage]}</p>

        <div className="project-content">
          <Link to="/projects/projectOne">Gerador de Senha</Link>
          <h2></h2>
          <div className="lang-func">
            <div>
              <h3>Linguagens utilizadas</h3>
              <p>What is Lorem Ipsum? Lorem Ipsum</p>
            </div>
            <div>
              <h3>Funcionalidade</h3>
              <p>What is Lorem Ipsum? Lorem Ipsum</p>
            </div>
          </div>
        </div>

        <div className="project-content">
          <Link to="/projects/projectTwo">Calculadora</Link>
          <div className="lang-func">
            <div>
              <h3>Linguagens utilizadas</h3>
              <p>What is Lorem Ipsum? Lorem Ipsum</p>
            </div>
            <div>
              <h3>Funcionalidade</h3>
              <p>What is Lorem Ipsum? Lorem Ipsum</p>
            </div>
          </div>
        </div>

        <div className="project-content">
          <Link to="/projects/projectThree">API GitHub</Link>
          <div className="lang-func">
            <div>
              <h3>Linguagens utilizadas</h3>
              <p>What is Lorem Ipsum? Lorem Ipsum</p>
            </div>
            <div>
              <h3>Funcionalidade</h3>
              <p>What is Lorem Ipsum? Lorem Ipsum</p>
            </div>
          </div>
        </div>

        <div className="project-content">
          <Link to="/projects/projectFour">Travel Green</Link>
          <div className="lang-func">
            <div>
              <h3>Linguagens utilizadas</h3>
              <p>What is Lorem Ipsum? Lorem Ipsum</p>
            </div>
            <div>
              <h3>Funcionalidade</h3>
              <p>What is Lorem Ipsum? Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
