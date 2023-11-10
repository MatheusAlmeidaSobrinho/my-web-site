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
import CoinCounter from '../../components/CoinCounter/CoinCounter'
import Player from '../../components/Player/Player'
import Footer from '../../components/Footer/Footer'
import GptApi from '../../components/GptApi/GptApi'
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
      {theme === 'clean' ? (
        <></>
      ) : (
        <>
          <GptApi />
          <Clock />
          <Weather />
          <CoinCounter />
          <Player />
          <Footer />
        </>
      )}
      <div className="header-component">
        <div className={`logo-component svg-${theme}`}>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80px"
              height="80px"
              viewBox="-4.8 -4.8 57.60 57.60"
              strokeWidth="4"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g className="c">
                  <polyline points="11.9123 36.1233 11.9123 11.85 24 36.15 36.0877 11.8869 36.0877 36.15" />
                </g>
                <g className="c">
                  <circle cx="24" cy="24" r="21.5" />
                </g>
              </g>
              <g id="SVGRepo_iconCarrier">
                <g className="c">
                  <polyline points="11.9123 36.1233 11.9123 11.85 24 36.15 36.0877 11.8869 36.0877 36.15" />
                </g>
                <g className="c">
                  <circle cx="24" cy="24" r="21.5" />
                </g>
              </g>
            </svg>
          </Link>
        </div>
        {!isAuthenticated() ? (
          <div className="nav-component">
            <div
              className="dropdown"
              onMouseLeave={closeDropdown}
              onClick={toggleDropdown}
            >
              <button className="dropdown-toggle">
                {currentPage === '/' && contents.home.pageHome[currentLanguage]}
                {currentPage === '/login' &&
                  contents.home.pageLogin[currentLanguage]}
                {currentPage === '/register' &&
                  contents.home.pageRegister[currentLanguage]}
                {currentPage === '/info' &&
                  contents.home.pageInfo[currentLanguage]}
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
                    <li>{contents.home.pageHome[currentLanguage]}</li>
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
                {currentPage === '/' && contents.home.pageHome[currentLanguage]}
                {currentPage === '/animes' && 'Animes'}
                {currentPage === '/accountuser' &&
                  contents.home.pageUser[currentLanguage]}
                {currentPage === '/accountadmin' &&
                  contents.home.pageAdmin[currentLanguage]}
                {currentPage === '/blog' && 'Blog'}
                {currentPage === '/games' &&
                  contents.home.tGamesGuideHome[currentLanguage]}
                {currentPage === '/toolsIa' &&
                  contents.home.pageTools[currentLanguage]}
                {currentPage === '/potatoApi' && 'Potato API'}
                {currentPage === '/projects' &&
                  contents.home.pageProjects[currentLanguage]}
                {currentPage === '/info' &&
                  contents.home.pageInfo[currentLanguage]}
                {currentPage === '/store' &&
                  contents.home.pageStore[currentLanguage]}
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
                    <li>{contents.home.pageHome[currentLanguage]}</li>
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
                    <li>{contents.home.tGamesGuideHome[currentLanguage]}</li>
                  </Link>

                  <Link
                    to="/store"
                    className={location.pathname === '/store' ? 'active' : ''}
                  >
                    <li>{contents.home.pageStore[currentLanguage]}</li>
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
                    to="/toolsIa"
                    className={location.pathname === '/toolsIa' ? 'active' : ''}
                  >
                    <li>{contents.home.pageTools[currentLanguage]}</li>
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
        )}
        <div className="configurations-component">
          <div className="configurations-item">
            <select
              id="theme"
              onChange={event => changeTheme(event.target.value)}
              value={theme}
            >
              <option value="dark">
                {contents.home.configThemeDark[currentLanguage]}
              </option>
              <option value="light">
                {contents.home.configThemeLight[currentLanguage]}
              </option>
              <option value="clean">
                {contents.home.configThemeClean[currentLanguage]}
              </option>
            </select>
          </div>
          <div className="configurations-item">
            <select
              id="acessibility"
              onChange={event => changeAcessibility(event.target.value)}
              value={acessibility}
            >
              <option value="normal">Normal</option>
              <option value="lower">
                {contents.home.configLower[currentLanguage]}
              </option>
              <option value="upper">
                {contents.home.configUpper[currentLanguage]}
              </option>
              <option value="zoom">
                {contents.home.configZoom[currentLanguage]}
              </option>
            </select>
          </div>
          <div className="configurations-item">
            <select
              id="language"
              onChange={event => changeCurrentLanguage(event.target.value)}
              value={currentLanguage}
            >
              <option value="portuguese">
                {contents.home.configLanguagePT[currentLanguage]}
              </option>
              <option value="english">
                {contents.home.configLanguageEN[currentLanguage]}
              </option>
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
                  <BiExit size={32} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="ifLogin">
              <Link to="/login">
                <BiLogIn size={32} />
              </Link>
              <Link to="/register">
                <BiRegistered size={32} />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="main-component">
        {algumaCondicao ? (
          <div className="instructions-component">
            <div className="instructions-component-why">
              <div className="instructions-component-why-div">
                <h3>{contents.home.WhyHome[currentLanguage]}</h3>
                <p>{contents.home.pWhyHome[currentLanguage]}</p>
              </div>
              <div>
                <span></span>
              </div>
            </div>
            <div className="instructions-component-what">
              <div className="instructions-component-what-div">
                <h3>{contents.home.whatHome[currentLanguage]}</h3>
                <p>{contents.home.pWhatHome[currentLanguage]}</p>
              </div>
              <div>
                <span></span>
              </div>
            </div>
            <div className="instructions-component-guide">
              <div className="instructions-component-guide-div">
                <h3>{contents.home.guideHome[currentLanguage]}</h3>
                <p>{contents.home.pGuideHome[currentLanguage]}</p>
              </div>
              <div>
                <span></span>
              </div>
            </div>

            <p className="onlyP">
              <Link to="/animes">Animes</Link>
              {contents.home.pAnimeGuideHome[currentLanguage]}
            </p>
            <p className="onlyP">
              <Link to="/blog">Blog</Link>
              {contents.home.pBlogGuideHome[currentLanguage]}
            </p>
            <p className="onlyP">
              <Link to="/games">
                {contents.home.tGamesGuideHome[currentLanguage]}
              </Link>
              {contents.home.pGamesGuideHome[currentLanguage]}
            </p>
            <p className="onlyP">
              <Link to="/toolsIa">
                {contents.home.tSiteIaGuideHome[currentLanguage]}
              </Link>
              {contents.home.pSiteIaGuideHome[currentLanguage]}
            </p>
            <p className="onlyP">
              <Link to="/potatoApi">Potato API</Link>
              {contents.home.pPotatoApiGuideHome[currentLanguage]}
            </p>
            <p className="onlyP">
              <Link to="/projects">
                {contents.home.tProjectsGuideHome[currentLanguage]}
              </Link>
              {contents.home.pProjectsGuideHome[currentLanguage]}
            </p>
            <p className="onlyP">
              <Link to="/info">{contents.home.pageInfo[currentLanguage]}</Link>
              {contents.home.pAboutGuideHome[currentLanguage]}
            </p>
            <p className="onlyP">
              <Link to="/store">
                {contents.home.pageStore[currentLanguage]}
              </Link>
              {contents.home.pStoreGuideHome[currentLanguage]}
            </p>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  )
}
