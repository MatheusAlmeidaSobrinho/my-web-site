// IMPORT PAGES
import Home from './pages/Home'
import Info from './pages/Info'
import Login from './pages/Login'
import Projects from './pages/Projects'
import AccountUser from './pages/AccountUser'
import AccountAdmin from './pages/AccountAdmin'
import Register from './pages/Register'
import Potato from './pages/Potato'

// IMPORT COMPONENTS
import ProjectOne from './components/ProjectOne'
import ProjectTwo from './components/ProjectTwo'

// IMPORT USE HOOKS
import { AcessibilityProvider } from './hooks/useAcessibility'
import { ThemeProvider } from './hooks/useTheme'
import { LanguageProvider } from './hooks/useLanguage'
import { CacheProvider } from './hooks/useCache'
import { AuthProvider } from './hooks/useAuth'
import { LocalStorageProvider } from './hooks/useLocalStorage'

// IMPORT REACT ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// IMPORT STYLE
import './styles/globalStyles.scss'

function App() {
  return (
    <LocalStorageProvider>
      <AuthProvider>
        <CacheProvider>
          <AcessibilityProvider>
            <ThemeProvider>
              <LanguageProvider>
                <Router>
                  <Routes>
                    <Route path="/" element={<Home />}>
                      <Route path="/info" element={<Info />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/projectOne" element={<ProjectOne />} />
                      <Route path="/projectTwo" element={<ProjectTwo />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/accountuser" element={<AccountUser />} />
                      <Route path="/accountadmin" element={<AccountAdmin />} />
                      <Route path="/animes" element={<Potato />} />
                      <Route path="/blog" element={<Potato />} />
                      <Route path="/consoles" element={<Potato />} />
                      <Route path="/toolsIa" element={<Potato />} />
                      <Route path="/games" element={<Potato />} />
                      <Route path="/potatoApi" element={<Potato />} />
                    </Route>
                  </Routes>
                </Router>
              </LanguageProvider>
            </ThemeProvider>
          </AcessibilityProvider>
        </CacheProvider>
      </AuthProvider>
    </LocalStorageProvider>
  )
}

export default App
