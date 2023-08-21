import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import githubSvgDark from '../../assets/images/githubSvgDark.svg'
import githubSvgLight from '../../assets/images/githubSvgLight.svg'
import linkedinSvgDark from '../../assets/images/linkedinSvgDark.svg'
import linkedinSvgLight from '../../assets/images/linkedinSvgLight.svg'
import './Footer.scss'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <div className={`footer ${theme}`}>
      <p className="potato">Fala ae</p>
      <div className="icons">
        {theme === 'dark' ? (
          <>
            <Link
              to="https://github.com/MatheusAlmeidaSobrinho"
              target="_blank"
            >
              <img src={githubSvgDark} alt="github logo" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/matheus-de-almeida-sobrinho-5bb533220/"
              target="_blank"
            >
              <img src={linkedinSvgDark} alt="linkedin logo" />
            </Link>
          </>
        ) : (
          <>
            <Link
              to="https://github.com/MatheusAlmeidaSobrinho"
              target="_blank"
            >
              <img src={githubSvgLight} alt="github logo" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/matheus-de-almeida-sobrinho-5bb533220/"
              target="_blank"
            >
              <img src={linkedinSvgLight} alt="linkedin logo" />
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
