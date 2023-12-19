import './FrontContent.scss'

export default function FrontContent() {
  return (
    <div className="blog-front">
      {/* Seção 1: O que é Front End */}
      <div>
        <h2>O que é Front End?</h2>
        <p>
          O Front End refere-se à parte de um aplicativo ou site com a qual os
          usuários interagem diretamente. Envolve o design, layout e
          interatividade.
        </p>
      </div>

      {/* Seção 2: Importância do Front End */}
      <div>
        <h2>Importância do Front End na Programação</h2>
        <p>
          O Front End desempenha um papel crucial na experiência do usuário,
          tornando a interface amigável e acessível. É a primeira impressão que
          os usuários têm de um aplicativo ou site.
        </p>
      </div>

      {/* Seção 3: Melhores Primeiros Passos */}
      <div>
        <h2>Melhores Primeiros Passos no Front End</h2>
        <p>
          Comece aprendendo HTML, CSS e JavaScript. Em seguida, explore
          frameworks como React, Angular ou Vue para desenvolvimento mais
          avançado.
        </p>
      </div>

      {/* Seção 4: Top 3 Livros Indispensáveis */}
      <div>
        <h2>Top 3 Livros Indispensáveis</h2>
        <p>1. Eloquent JavaScript - Autor: Marijn Haverbeke</p>
        <p>2. React Up and Running - Autor: Stoyan Stefanov</p>
        <p>3. CSS Secrets - Autor: Lea Verou</p>
      </div>

      {/* Seção 5: Top 3 Sites */}
      <div>
        <h2>Top 3 Sites</h2>
        <p>
          <strong>Roadmap:</strong> Roadmap é um site que fornece guias de
          aprendizado para várias tecnologias de desenvolvimento.
        </p>
        <p>
          <strong>W3Schools:</strong> W3Schools é uma excelente fonte para
          aprender HTML, CSS, JavaScript e muito mais.
        </p>
        <p>
          <strong>Mozilla Developer Network (MDN):</strong> MDN oferece
          documentação detalhada sobre tecnologias web.
        </p>
      </div>

      {/* Seção 6: Top 3 Canais do YouTube */}
      <div>
        <h2>Top 3 Canais do YouTube</h2>
        <p>1. Traversy Media</p>
        <p>2. Academind</p>
        <p>3. The Net Ninja</p>
      </div>

      {/* Seção 7: Imagem do Roadmap */}
      <div>
        <h2>Encerramento com Imagem do Roadmap</h2>
        <p>
          Aqui temos uma imagem com os passos para uma carreira de sucesso no
          Front End:
        </p>
        <p>
          <a
            href="https://roadmap.sh/frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roadmap Front End
          </a>
        </p>
      </div>
    </div>
  )
}
