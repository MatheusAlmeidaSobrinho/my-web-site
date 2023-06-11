import './style.scss'

import { contents } from '../../assets/translate/contents'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useAcessibility } from '../../hooks/useAcessibility'
import { useTheme } from '../../hooks/useTheme'
import { useLanguage } from '../../hooks/useLanguage'
import { useAuthContext } from '../../hooks/useAuth'
import { useLocalStorageContext } from '../../hooks/useLocalStorage'
import Clock from '../../components/Clock/Clock'
// import Weather from '../../components/Weather/Weather'

export default function Home() {
  const { theme, changeTheme } = useTheme()
  const { acessibility, changeAcessibility } = useAcessibility()
  const { currentLanguage, changeCurrentLanguage } = useLanguage()
  const location = useLocation()
  const algumaCondicao = location.pathname === '/'
  const { getItem } = useLocalStorageContext()
  const user = getItem('user')
  const { isAuthenticated, logout } = useAuthContext()

  return (
    <div className={`page-home ${theme} ${acessibility} ${currentLanguage}`}>
      <Clock />
      {/* <Weather /> */}
      <div className="header-component">
        <div className="logo-component">
          <Link to="/">
            <h1>LOGO</h1>
          </Link>
        </div>
        <div className="configurations-component">
          <div className="configurations-item">
            <select
              id="theme"
              onChange={event => changeTheme(event.target.value)}
              value={theme}
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
          <div className="configurations-item">
            <select
              id="acessibility"
              onChange={event => changeAcessibility(event.target.value)}
              value={acessibility}
            >
              <option value="normal">Normal</option>
              <option value="lower">LowerCase</option>
              <option value="upper">UpperCase</option>
              <option value="zoom">Zoom</option>
            </select>
          </div>
          <div className="configurations-item">
            <select
              id="language"
              onChange={event => changeCurrentLanguage(event.target.value)}
              value={currentLanguage}
            >
              <option value="portuguese">Portugues</option>
              <option value="english">English</option>
            </select>
          </div>
        </div>
        <div className="login-component">
          {isAuthenticated() ? (
            <div>
              <div className="login-area">
                <p>
                  {user && user.name === 'Matheus' ? (
                    <Link to="/accountadmin" className="login-account">
                      Olá ADM, <span>{user ? user.name : ''}</span>!
                    </Link>
                  ) : (
                    <Link to="/accountuser" className="login-account">
                      Olá, <span>{user ? user.name : ''}</span>!
                    </Link>
                  )}
                </p>
                <Link className="login-button-logout" onClick={logout}>
                  Sair
                </Link>
              </div>
            </div>
          ) : (
            <div className="ifLogin">
              <Link to="/login">Entrar</Link>
              <Link to="/register">Cadastrar</Link>
            </div>
          )}
        </div>
      </div>

      <div className="navAndMain">
        {!isAuthenticated() ? (
          <div className="nav-component">
            <Link to="/projects">
              {contents.navBar.projects[currentLanguage]}
            </Link>
            <Link to="/info">
              {contents.navBar.informations[currentLanguage]}
            </Link>
            <Link to="/contact">
              {contents.navBar.contact[currentLanguage]}
            </Link>
          </div>
        ) : (
          <div className="nav-component">
            <Link to="/projects">
              {contents.navBar.projects[currentLanguage]}
            </Link>
            <Link to="/info">
              {contents.navBar.informations[currentLanguage]}
            </Link>
            <Link to="/contact">
              {contents.navBar.contact[currentLanguage]}
            </Link>
            <Link to="/potato">newPage</Link>
          </div>
        )}

        <div className="main-component">
          {algumaCondicao ? (
            <div className="instructions-component">
              <h3>Por que criei esse site?</h3>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
              <h3>Sobre oque é esse site?</h3>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
              <h3>Projetos e Funcionalidades</h3>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
              <h3>Guia do site</h3>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  )
}
