import axios from 'axios'
import { useState } from 'react'
import './GptApi.scss'

export default function GptApi() {
  const [texto, setTexto] = useState('')
  const [resposta, setResposta] = useState('')

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
        setResposta(error)
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
    <div className="component-chatGpt">
      <div className="container-text">
        <textarea
          value={resposta}
          rows="19"
          disabled
          placeholder="Aguardando sua pergunta mestre ^-^"
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
