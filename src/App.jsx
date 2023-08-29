import { useLayoutEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'

import ProjectOne from './components/ProjectOne'
import ProjectTwo from './components/ProjectTwo'

// PAGES COMPONENTS
import Home from './pages/Home'
import Info from './pages/Info'
import Login from './pages/Login'
import Projects from './pages/Projects'
import AccountUser from './pages/AccountUser'
import AccountAdmin from './pages/AccountAdmin'
import Register from './pages/Register'
import Games from './pages/Games'
import Blog from './pages/Blog'
import PotatoApi from './pages/PotatoApi'
import Anime from './pages/Animes'
import ToolsIA from './pages/ToolsIA'
import Store from './pages/Store/Store'

// STYLE COMPONENTS
import './styles/globalStyles.scss'

const App = () => {
  const { theme } = useTheme()

  useLayoutEffect(() => {
    document.documentElement.style.backgroundImage =
      theme === 'dark'
        ? 'linear-gradient(120deg, #185a47, #25185a , #4d185a)'
        : 'linear-gradient(120deg, #70e3c2, #a693f0, #7eebbf)'
  }, [theme])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="store" element={<Store />} />
          <Route path="info" element={<Info />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/projectOne" element={<ProjectOne />} />
          <Route path="projects/projectTwo" element={<ProjectTwo />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="accountuser" element={<AccountUser />} />
          <Route path="accountadmin" element={<AccountAdmin />} />
          <Route path="animes" element={<Anime />} />
          <Route path="blog" element={<Blog />} />
          <Route path="toolsIa" element={<ToolsIA />} />
          <Route path="games" element={<Games />} />
          <Route path="potatoApi" element={<PotatoApi />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
