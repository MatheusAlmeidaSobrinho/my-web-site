import { useAcessibility } from '../../hooks/useAcessibility'
import { useTheme } from '../../hooks/useTheme'
import { useLanguage } from '../../hooks/useLanguage'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuth'
import './style.scss'

export default function Login() {
  const navigate = useNavigate()

  const { theme } = useTheme()
  const { acessibility } = useAcessibility()
  const { currentLanguage } = useLanguage()
  const { login } = useAuthContext()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    // Verifique se há um token de autenticação no localStorage ao carregar a página
    const token = localStorage.getItem('token')
    if (token) {
      // Redirecione para a página Home
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    const loggedIn = login(email, password)
    if (loggedIn) {
      navigate('/')
    } else {
      alert('Credenciais inválidas. Por favor, tente novamente.')
    }
  }

  return (
    <div
      className={`login-container ${theme} ${acessibility} ${currentLanguage}`}
    >
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">
          Entrar
        </button>
      </form>

      <div className="login-goToRegister">
        Você não possui cadastro?
        <Link to="/register"> Clique Aqui</Link>
      </div>
    </div>
  )
}
