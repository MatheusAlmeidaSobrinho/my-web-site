import { Link } from 'react-router-dom'
import './ProjectTwo.scss'

export default function ProjectTwo() {
  return (
    <div className="projectTwo-page">
      <div className="projectTwo-header">
        <button>
          <Link to="/projectOne">Voltar</Link>
        </button>
        <p>Project 2</p>
        <button>
          <Link to="/projectThree">Avançar</Link>
        </button>
      </div>
    </div>
  )
}
