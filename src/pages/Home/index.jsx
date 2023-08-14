import './Home.scss'

import { contents } from '../../assets/translate/contents'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useAcessibility } from '../../hooks/useAcessibility'
import { useTheme } from '../../hooks/useTheme'
import { useLanguage } from '../../hooks/useLanguage'
import { useAuthContext } from '../../hooks/useAuth'
import { useLocalStorageContext } from '../../hooks/useLocalStorage'
// import Clock from '../../components/Clock/Clock'
// import Weather from '../../components/Weather/Weather'
// import CoinCounter from '../../components/CoinCounter/CoinCounter'
import logoDark from '../../assets/images/logoDark.svg'
import logoLight from '../../assets/images/logoLight.svg'
import { useEffect, useState } from 'react'
import { BiExit, BiLogIn, BiRegistered } from 'react-icons/bi'

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
      {/* <Clock />
      <Weather />
      <CoinCounter /> */}
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
                {currentPage === '/login' && 'Logging...'}
                {currentPage === '/register' && 'Registering...'}
                {currentPage === '/info' && 'Sobre'}
                {currentPage === '/projects' &&
                  contents.home.pageProjects[currentLanguage]}
                {currentPage === '/projects/projectOne' &&
                  contents.home.pageProjOneProject[currentLanguage]}
                {currentPage === '/projects/projectTwo' &&
                  contents.home.pageProjTwoProject[currentLanguage]}
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
                    <li>{contents.home.pageProjects[currentLanguage]}</li>
                  </Link>
                  <Link
                    to="/info"
                    className={location.pathname === '/info' ? 'active' : ''}
                  >
                    <li>{contents.home.pageInfo[currentLanguage]}</li>
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
                {currentPage === '/accountuser' && 'My Space'}
                {currentPage === '/accountadmin' && 'Adm Space'}
                {currentPage === '/blog' && 'Blog'}
                {currentPage === '/games' && 'Games'}
                {currentPage === '/toolsIa' &&
                  contents.home.pageTools[currentLanguage]}
                {currentPage === '/potatoApi' && 'Potato API'}
                {currentPage === '/projects' &&
                  contents.home.pageProjects[currentLanguage]}
                {currentPage === '/info' &&
                  contents.home.pageInfo[currentLanguage]}
                {currentPage === '/store' &&
                  contents.home.pageStore[currentLanguage]}
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
                    to="/games"
                    className={location.pathname === '/games' ? 'active' : ''}
                  >
                    <li>Games</li>
                  </Link>

                  <Link
                    to="/toolsIa"
                    className={location.pathname === '/toolsIa' ? 'active' : ''}
                  >
                    <li>{contents.home.pageTools[currentLanguage]}</li>
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
                    <li>{contents.home.pageProjects[currentLanguage]}</li>
                  </Link>
                  <Link
                    to="/info"
                    className={location.pathname === '/info' ? 'active' : ''}
                  >
                    <li>{contents.home.pageInfo[currentLanguage]}</li>
                  </Link>

                  <Link
                    to="/store"
                    className={location.pathname === '/store' ? 'active' : ''}
                  >
                    <li>{contents.home.pageStore[currentLanguage]}</li>
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
                      {contents.home.helloHome[currentLanguage]} ADM,{' '}
                      <span>{user ? user.name : ''}</span>!
                    </Link>
                  ) : (
                    <Link to="/accountuser" className="login-account">
                      {contents.home.helloHome[currentLanguage]},{' '}
                      <span>{user ? user.name : ''}</span>!
                    </Link>
                  )}
                </p>
                <Link className="login-button-logout" onClick={logout}>
                  <BiExit size={28} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="ifLogin">
              <Link to="/login">
                <BiLogIn size={28} />
              </Link>
              <Link to="/register">
                <BiRegistered size={28} />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="main-component">
        {algumaCondicao ? (
          <div className="instructions-component">
            <h3>{contents.home.WhyHome[currentLanguage]}</h3>
            <p>{contents.home.pWhyHome[currentLanguage]}</p>
            <h3>{contents.home.whatHome[currentLanguage]}</h3>
            <p>{contents.home.pWhatHome[currentLanguage]}</p>
            <h3>{contents.home.textProjAndFuncHome[currentLanguage]}</h3>
            <p>{contents.home.pTextProjAndFuncHome[currentLanguage]}</p>
            <h3>{contents.home.guideHome[currentLanguage]}</h3>
            <p>{contents.home.pGuideHome[currentLanguage]}</p>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  )
}
