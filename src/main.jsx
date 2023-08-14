import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AcessibilityProvider } from './hooks/useAcessibility'
import { ThemeProvider } from './hooks/useTheme'
import { LanguageProvider } from './hooks/useLanguage'
import { CacheProvider } from './hooks/useCache'
import { AuthProvider } from './hooks/useAuth'
import { LocalStorageProvider } from './hooks/useLocalStorage'
import { CoinProvider } from './hooks/useCoin'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalStorageProvider>
      <AuthProvider>
        <CacheProvider>
          <AcessibilityProvider>
            <ThemeProvider>
              <LanguageProvider>
                <CoinProvider>
                  <App />
                </CoinProvider>
              </LanguageProvider>
            </ThemeProvider>
          </AcessibilityProvider>
        </CacheProvider>
      </AuthProvider>
    </LocalStorageProvider>
  </React.StrictMode>
)
