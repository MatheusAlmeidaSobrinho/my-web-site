import './Home.scss'

import { contents } from '../../assets/translate/contents'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useAcessibility } from '../../hooks/useAcessibility'
import { useTheme } from '../../hooks/useTheme'
import { useLanguage } from '../../hooks/useLanguage'
import { useAuthContext } from '../../hooks/useAuth'
import { useLocalStorageContext } from '../../hooks/useLocalStorage'
import Clock from '../../components/Clock/Clock'
import Weather from '../../components/Weather/Weather'
import logoDark from '../../assets/images/logoDark.svg'
import logoLight from '../../assets/images/logoLight.svg'
import { useEffect, useState } from 'react'

export default function Home() {
  const { theme, changeTheme } = useTheme()
  const { acessibility, changeAcessibility } = useAcessibility()
  const { currentLanguage, changeCurrentLanguage } = useLanguage()
  const location = useLocation()
  const algumaCondicao = location.pathname === '/'
  const { getItem } = useLocalStorageContext()
  const user = getItem('user')
  const { isAuthenticated, logout } = useAuthContext()
  const [isOpen, setIsOpen] = useState(false)

  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    setCurrentPage(location.pathname)
  }, [location])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = () => {
    setIsOpen(false)
  }

  return (
    <div className={`page-home ${theme} ${acessibility} ${currentLanguage}`}>
      <Clock />
      <Weather />
      <div className="header-component">
        <div className="logo-component">
          {theme === 'dark' ? (
            <Link to="/">
              <img src={logoDark} alt="" />
            </Link>
          ) : (
            <Link to="/">
              <img src={logoLight} alt="" />
            </Link>
          )}
        </div>
        {!isAuthenticated() ? (
          <div className="nav-component">
            <div
              className="dropdown"
              onMouseLeave={closeDropdown}
              onClick={toggleDropdown}
            >
              <button className="dropdown-toggle">
                {currentPage === '/' && 'Home'}
                {currentPage === '/animes' && 'Animes'}
                {currentPage === '/blog' && 'Blog'}
                {currentPage === '/consoles' && 'Consoles'}
                {currentPage === '/toolsIa' && 'IA Tools'}
                {currentPage === '/games' && 'Games'}
                {currentPage === '/potatoApi' && 'Api LP'}
                {currentPage === '/info' && 'Sobre Mim'}
                {currentPage === '/projects' &&
                  contents.navBar.projects[currentLanguage]}
              </button>
              {isOpen && (
                <ul className="dropdown-menu" onMouseLeave={closeDropdown}>
                  <Link
                    to="/"
                    className={location.pathname === '/' ? 'active' : ''}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    to="/projects"
                    className={
                      location.pathname === '/projects' ? 'active' : ''
                    }
                  >
                    <li>{contents.navBar.projects[currentLanguage]}</li>
                  </Link>
                  <Link
                    to="/info"
                    className={location.pathname === '/info' ? 'active' : ''}
                  >
                    <li>{contents.navBar.about[currentLanguage]}</li>
                  </Link>
                </ul>
              )}
            </div>
          </div>
        ) : (
          <div className="nav-component">
            <div
              className="dropdown"
              onMouseLeave={closeDropdown}
              onClick={toggleDropdown}
            >
              <button className="dropdown-toggle">
                {currentPage === '/' && 'Home'}
                {currentPage === '/animes' && 'Animes'}
                {currentPage === '/blog' && 'Blog'}
                {currentPage === '/consoles' && 'Consoles'}
                {currentPage === '/games' && 'Games'}
                {currentPage === '/toolsIa' && 'Tools IA'}
                {currentPage === '/potatoApi' && 'Potato API'}
                {currentPage === '/projects' &&
                  contents.navBar.projects[currentLanguage]}
                {currentPage === '/info' && 'Sobre Mim'}
              </button>
              {isOpen && (
                <ul className="dropdown-menu" onMouseLeave={closeDropdown}>
                  <Link
                    to="/"
                    className={location.pathname === '/' ? 'active' : ''}
                  >
                    <li>Home</li>
                  </Link>

                  <Link
                    to="/animes"
                    className={location.pathname === '/animes' ? 'active' : ''}
                  >
                    <li>Animes</li>
                  </Link>

                  <Link
                    to="/blog"
                    className={location.pathname === '/blog' ? 'active' : ''}
                  >
                    <li>Blog</li>
                  </Link>

                  <Link
                    to="/consoles"
                    className={
                      location.pathname === '/consoles' ? 'active' : ''
                    }
                  >
                    <li>Consoles</li>
                  </Link>

                  <Link
                    to="/games"
                    className={location.pathname === '/games' ? 'active' : ''}
                  >
                    <li>Games</li>
                  </Link>

                  <Link
                    to="/toolsIa"
                    className={location.pathname === '/toolsIa' ? 'active' : ''}
                  >
                    <li>Tools IA</li>
                  </Link>

                  <Link
                    to="/potatoApi"
                    className={
                      location.pathname === '/potatoApi' ? 'active' : ''
                    }
                  >
                    <li>Potato API</li>
                  </Link>

                  <Link
                    to="/projects"
                    className={
                      location.pathname === '/projects' ? 'active' : ''
                    }
                  >
                    <li>{contents.navBar.projects[currentLanguage]}</li>
                  </Link>
                  <Link
                    to="/info"
                    className={location.pathname === '/info' ? 'active' : ''}
                  >
                    <li>{contents.navBar.about[currentLanguage]}</li>
                  </Link>
                </ul>
              )}
            </div>
          </div>
        )}
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
  )
}
