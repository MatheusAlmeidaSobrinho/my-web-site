import { Link, useNavigate } from 'react-router-dom'
import './style.scss'

import { useAcessibility } from '../../hooks/useAcessibility'
import { useTheme } from '../../hooks/useTheme'
import { useLanguage } from '../../hooks/useLanguage'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuth'

export default function Register() {
  const navigate = useNavigate()
  const { theme } = useTheme()
  const { acessibility } = useAcessibility()
  const { currentLanguage } = useLanguage()

  const { register } = useAuthContext()
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    if (user.password === user.confirmPassword) {
      register(user)
      navigate('/login')
    } else {
      alert('As senhas não coincidem. Por favor, tente novamente.')
    }
  }

  return (
    <div
      className={`register-container ${theme} ${acessibility} ${currentLanguage}`}
    >
      <h1 className="register-title">Registro</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          className="register-input"
          type="text"
          placeholder="Nome"
          value={user.name}
          onChange={e => setUser({ ...user, name: e.target.value })}
          required
        />
        <input
          className="register-input"
          type="text"
          placeholder="Sobrenome"
          value={user.lastName}
          onChange={e => setUser({ ...user, lastName: e.target.value })}
          required
        />
        <input
          className="register-input"
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
          required
        />
        <input
          className="register-input"
          type="password"
          placeholder="Senha"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
          required
        />
        <input
          className="register-input"
          type="password"
          placeholder="Confirme a Senha"
          value={user.confirmPassword}
          onChange={e => setUser({ ...user, confirmPassword: e.target.value })}
          required
        />
        <button type="submit" className="register-button">
          Registrar
        </button>
      </form>
      <div className="register-goToLogin">
        Você possui cadastro?
        <Link to="/login"> Clique Aqui</Link>
      </div>
    </div>
  )
}
