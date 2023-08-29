import axios from 'axios'
import { useState } from 'react'
import './GptApi.scss'
import { useTheme } from '../../hooks/useTheme'

export default function GptApi() {
  const [texto, setTexto] = useState('')
  const [resposta, setResposta] = useState('')
  const { theme } = useTheme()

  function generateText() {
    const prompt = texto
    const model = 'text-davinci-002'
    const maxTokens = 2048

    const REACT_APP_OPENAI_API_KEY =
      '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'

    axios
      .post(
        'https://api.openai.com/v1/completions',
        {
          prompt: prompt,
          model: model,
          max_tokens: maxTokens
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${REACT_APP_OPENAI_API_KEY}`
          }
        }
      )
      .then(response => {
        console.log(response.data.choices[0].text)
        setResposta(response.data.choices[0].text)
        setTexto('')
      })
      .catch(error => {
        console.error(error)
        setResposta('No momento a Api se encontra com multiplos usos =/')
      })
  }

  const captureAudioClick = () => {
    const reconhecimento = new window.webkitSpeechRecognition()

    reconhecimento.onresult = event => {
      const resultado = event.results[event.resultIndex]
      setTexto(resultado[0].transcript)
    }

    reconhecimento.start()
  }

  const handleClearButtonClick = () => {
    setTexto('')
    setResposta('')
  }

  return (
    <div className={`component-chatGpt ${theme}`}>
      <div className="container-text">
        <textarea
          value={resposta}
          rows="19"
          disabled
          placeholder="Me pergunte algo"
        />

        <input
          type="text"
          placeholder="Escreva..."
          onChange={e => setTexto(e.target.value)}
          value={texto}
        />
      </div>

      <div className="btn-container">
        <button onClick={captureAudioClick}>Microfone</button>
        <button type="button" onClick={generateText}>
          Perguntar
        </button>
        {texto === '' ? (
          <span></span>
        ) : (
          <button onClick={handleClearButtonClick}>Limpar</button>
        )}
      </div>
    </div>
  )
}
