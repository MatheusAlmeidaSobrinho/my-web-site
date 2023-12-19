import { useState } from 'react'
import './Blog.scss'
import { IoHome } from 'react-icons/io5'
import FrontContent from './FrontContent'
import BackContent from './BackContent'
import LearningIntro from './LearningIntro'
import BooksContent from './BooksContent'

export default function Blog() {
  const [content, setContent] = useState('start')

  const renderContent = () => {
    switch (content) {
      case 'start':
        return <LearningIntro />
      case 'front':
        return <FrontContent />
      case 'back':
        return <BackContent />
      case 'guias':
        return (
          <div className="blog-guide">
            <h3>title guias</h3>
            <p>bla bla bla</p>
          </div>
        )
      case 'livros':
        return <BooksContent />
      default:
        return null
    }
  }

  return (
    <section className="blog-page">
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li>
            <button
              onClick={() => setContent('start')}
              style={{ borderRadius: '50%' }}
            >
              <IoHome />
            </button>
          </li>
          <li>
            <button onClick={() => setContent('front')}>FRONT</button>
          </li>
          <li>
            <button onClick={() => setContent('back')}>BACK</button>
          </li>
          <li>
            <button onClick={() => setContent('guias')}>GUIAS</button>
          </li>
          <li>
            <button onClick={() => setContent('livros')}>LIVROS</button>
          </li>
        </ul>
      </nav>
      <div className="blog-body">{renderContent()}</div>
    </section>
  )
}
