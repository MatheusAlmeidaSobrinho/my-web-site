// IMPORT PAGES
import Home from './pages/Home'
import Info from './pages/Info'
import Login from './pages/Login'
import AccountUser from './pages/AccountUser'
import AccountAdmin from './pages/AccountAdmin'

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
import Register from './pages/Register'

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
                      <Route path="/projects" />
                      <Route path="/contact" />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/accountuser" element={<AccountUser />} />
                      <Route path="/accountadmin" element={<AccountAdmin />} />
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
