import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import renewSvg from '../../assets/images/renew.svg'
import copySvg from '../../assets/images/copy.svg'
import './ProjectOne.scss'

import { useAcessibility } from '../../hooks/useAcessibility'
import { useTheme } from '../../hooks/useTheme'
import { useLanguage } from '../../hooks/useLanguage'

export default function ProjectOne() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(16)
  const [upperCaseCheck, setUpperCaseCheck] = useState(true)
  const [numberCheck, setNumberCheck] = useState(true)
  const [symbolCheck, setSymbolCheck] = useState(true)
  const [securityPercent, setSecurityPercent] = useState(0)

  useEffect(() => {
    generatePassword()
  }, [passwordLength, upperCaseCheck, numberCheck, symbolCheck])

  const generatePassword = () => {
    let chars = 'abcdefghjkmnpqrstuvwxyz'

    const upperCaseChars = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
    const numberChars = '123456789'
    const symbolChars = '?!@&*()[]'

    if (upperCaseCheck) {
      chars += upperCaseChars
    }

    if (numberCheck) {
      chars += numberChars
    }

    if (symbolCheck) {
      chars += symbolChars
    }

    let newPassword = ''

    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length)
      newPassword += chars.substring(randomNumber, randomNumber + 1)
    }

    setPassword(newPassword)
    calculateQuality()
    calculateFontSize()
  }

  const calculateQuality = () => {
    const percent = Math.round(
      (passwordLength / 64) * 25 +
        (upperCaseCheck ? 15 : 0) +
        (numberCheck ? 25 : 0) +
        (symbolCheck ? 35 : 0)
    )

    setSecurityPercent(percent)
  }

  const calculateFontSize = () => {
    const inputEl = document.querySelector('#password')

    if (passwordLength > 45) {
      inputEl.classList.remove('font-sm')
      inputEl.classList.remove('font-xs')
      inputEl.classList.add('font-xxs')
    } else if (passwordLength > 32) {
      inputEl.classList.remove('font-sm')
      inputEl.classList.add('font-xs')
      inputEl.classList.remove('font-xxs')
    } else if (passwordLength > 22) {
      inputEl.classList.add('font-sm')
      inputEl.classList.remove('font-xs')
      inputEl.classList.remove('font-xxs')
    } else {
      inputEl.classList.remove('font-sm')
      inputEl.classList.remove('font-xs')
      inputEl.classList.remove('font-xxs')
    }
  }

  const copy = () => {
    navigator.clipboard.writeText(password)
  }

  const { theme } = useTheme()
  const { acessibility } = useAcessibility()
  const { currentLanguage } = useLanguage()

  return (
    <div
      className={`projectOne-page ${theme} ${acessibility} ${currentLanguage}`}
    >
      <div className="projectOne-header">
        <button>
          <Link to="/projects">Voltar</Link>
        </button>
        <h3 className="title">Gerador de senha</h3>
        <button>
          <Link to="/projectTwo">Avançar</Link>
        </button>
      </div>
      <main>
        <section className="hero">
          <p className="subtitle">
            Utilize o nosso gerador online para criar uma senha forte e segura.
          </p>
        </section>

        <section className="box">
          <div className="password">
            <div className="text">
              <input
                type="text"
                name="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="actions">
              <button id="copy-1" onClick={copy}>
                <img src={copySvg} width="38" alt="Copy" />
              </button>
              <button id="renew" onClick={generatePassword}>
                <img src={renewSvg} width="38" alt="Renew" />
              </button>
            </div>
          </div>
          <div className="security-indicator">
            <div
              id="security-indicator-bar"
              className={`bar ${
                securityPercent > 69
                  ? 'safe'
                  : securityPercent > 50
                  ? 'warning'
                  : 'critical'
              }`}
              style={{ width: `${securityPercent}%` }}
            ></div>
          </div>
        </section>

        <section className="box customize">
          <h3 className="title">Personalizar</h3>
          <div className="actions">
            <div className="password-length">
              <p>
                Tamanho: <span id="password-length-text">{passwordLength}</span>
              </p>
              <input
                type="range"
                name="password-length"
                id="password-length"
                className="slider"
                value={passwordLength}
                min="4"
                max="64"
                onChange={e => setPasswordLength(parseInt(e.target.value))}
              />
            </div>
            <div className="config">
              <label className="checkbox-container">
                <span className="text">Maiúsculas</span>
                <input
                  type="checkbox"
                  id="uppercase-check"
                  checked={upperCaseCheck}
                  onChange={e => setUpperCaseCheck(e.target.checked)}
                />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox-container">
                <span className="text">Números</span>
                <input
                  type="checkbox"
                  id="number-check"
                  checked={numberCheck}
                  onChange={e => setNumberCheck(e.target.checked)}
                />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox-container">
                <span className="text">Símbolos</span>
                <input
                  type="checkbox"
                  id="symbol-check"
                  checked={symbolCheck}
                  onChange={e => setSymbolCheck(e.target.checked)}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </section>

        <div className="submit">
          <button id="copy-2" onClick={copy}>
            Copiar senha
          </button>
        </div>
      </main>
    </div>
  )
}
