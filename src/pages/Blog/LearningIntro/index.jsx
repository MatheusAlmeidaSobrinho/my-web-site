// LearningIntro.js
export default function LearningIntro() {
  return (
    <div className="learning-intro">
      <header>
        <h1>Explorando o Mundo do Desenvolvimento</h1>
        <p>
          Bem-vindo à minha jornada de aprendizado! Aqui você encontrará uma
          variedade de conteúdos sobre desenvolvimento web, desde conceitos
          básicos até tópicos mais avançados.
        </p>
      </header>

      <section className="learning-categories">
        <div>
          <h2>Front End</h2>
          <p>
            Explore os fundamentos do Front End, incluindo HTML, CSS,
            JavaScript, frameworks como React, e dicas de design responsivo.
          </p>
        </div>

        <div>
          <h2>Back End</h2>
          <p>
            Aprofunde-se no mundo do Back End, aprendendo sobre linguagens como
            Node.js, Python, Java, frameworks como Express.js, Django e boas
            práticas de desenvolvimento server-side.
          </p>
        </div>

        <div>
          <h2>Guias e Dicas</h2>
          <p>
            Descubra guias práticos e dicas úteis para aprimorar suas
            habilidades de programação, resolver problemas comuns e otimizar seu
            fluxo de trabalho.
          </p>
        </div>

        <div>
          <h2>Sites Recomendados</h2>
          <p>
            Explore uma lista de sites valiosos para aprendizado contínuo,
            incluindo plataformas educacionais, documentação oficial e recursos
            da comunidade.
          </p>
        </div>

        {/* Adicione mais categorias conforme necessário */}
      </section>
    </div>
  )
}
