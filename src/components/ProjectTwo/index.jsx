import { Link } from 'react-router-dom'
import './ProjectTwo.scss'

export default function ProjectTwo() {
  return (
    <div className="projectTwo-page">
      <div className="projectTwo-header">
        <button>
          <Link to="/projects/projectOne">Voltar</Link>
        </button>
        <p>Project 2</p>
        <button>
          <Link to="/projects/projectThree">Avançar</Link>
        </button>
      </div>
      <h1>CALCULADORA</h1>
    </div>
  )
}
