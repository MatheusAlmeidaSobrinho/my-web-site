import './BooksContent.scss'

export default function BooksContent() {
  return (
    <div
      className="books-for-blog"
      style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
    >
      <div className="books-frontend-react">
        <h3>Livros para Front End e React</h3>

        {/* Livro 1 */}
        <div>
          <p>Nome: React Up and Running</p>
          <p>Autor: Stoyan Stefanov</p>
          <p>
            Sobre: Este livro fornece uma introdução prática ao desenvolvimento
            com React, abordando desde conceitos básicos até tópicos avançados.
          </p>
          <p>Recomendado para: Iniciante</p>
          <p>Rank: Iniciante</p>
          <p>
            Opinião: Uma leitura excelente para quem está começando com React.
            Aborda os fundamentos de forma clara e prática.
          </p>
        </div>

        {/* Livro 2 */}
        <div>
          <p>Nome: Eloquent JavaScript</p>
          <p>Autor: Marijn Haverbeke</p>
          <p>
            Sobre: Este livro abrange JavaScript de maneira profunda, sendo
            valioso tanto para iniciantes quanto para desenvolvedores mais
            experientes.
          </p>
          <p>Recomendado para: Iniciante a Sênior</p>
          <p>Rank: Sênior</p>
          <p>
            Opinião: Uma leitura desafiadora, mas extremamente recompensadora.
            Recomendado para quem busca compreender a essência do JavaScript.
          </p>
        </div>

        {/* Livro 3 */}
        <div>
          <p>Nome: JavaScript: The Good Parts</p>
          <p>Autor: Douglas Crockford</p>
          <p>
            Sobre: Este livro foca nos melhores aspectos do JavaScript, ajudando
            a evitar armadilhas comuns e a escrever código mais eficiente.
          </p>
          <p>Recomendado para: Júnior a Sênior</p>
          <p>Rank: Sênior</p>
          <p>
            Opinião: Uma leitura essencial para entender os aspectos
            fundamentais do JavaScript.
          </p>
        </div>

        {/* Livro 4 */}
        <div>
          <p>Nome: React Design Patterns and Best Practices</p>
          <p>Autor: Michele Bertoli</p>
          <p>
            Sobre: Este livro explora padrões de design e melhores práticas ao
            trabalhar com React, fornecendo insights valiosos para
            desenvolvedores.
          </p>
          <p>Recomendado para: Júnior a Sênior</p>
          <p>Rank: Júnior</p>
          <p>
            Opinião: Uma leitura prática para aprimorar suas habilidades no
            desenvolvimento com React.
          </p>
        </div>

        {/* Livro 5 */}
        <div>
          <p>Nome: You Dont Know JS</p>
          <p>Autor: Kyle Simpson</p>
          <p>
            Sobre: Esta série de livros explora profundamente o JavaScript,
            proporcionando uma compreensão aprofundada dos seus aspectos mais
            complexos.
          </p>
          <p>Recomendado para: Sênior a Master</p>
          <p>Rank: Master</p>
          <p>
            Opinião: Leitura avançada, mas altamente recomendada para quem busca
            um conhecimento profundo do JavaScript.
          </p>
        </div>

        {/* Adicione mais livros conforme necessário */}
      </div>
      <div className="books-backend-java">
        <h3>Livros para Backend e Java</h3>

        {/* Livro 1 */}
        <div>
          <p>Nome: Effective Java</p>
          <p>Autor: Joshua Bloch</p>
          <p>
            Sobre: Este livro oferece práticas eficazes para o desenvolvimento
            em Java, cobrindo boas práticas, padrões e otimizações.
          </p>
          <p>Recomendado para: Júnior a Sênior</p>
          <p>Rank: Sênior</p>
          <p>
            Opinião: Uma leitura essencial para qualquer desenvolvedor Java que
            busca escrever código robusto e eficiente.
          </p>
        </div>

        {/* Livro 2 */}
        <div>
          <p>Nome: Spring in Action</p>
          <p>Autor: Craig Walls</p>
          <p>
            Sobre: Este livro explora o framework Spring para desenvolvimento
            Java, abrangendo conceitos desde básicos até avançados.
          </p>
          <p>Recomendado para: Júnior a Sênior</p>
          <p>Rank: Júnior</p>
          <p>
            Opinião: Um guia prático para quem deseja dominar o desenvolvimento
            de aplicativos Java com o Spring.
          </p>
        </div>

        {/* Livro 3 */}
        <div>
          <p>Nome: Clean Code: A Handbook of Agile Software Craftsmanship</p>
          <p>Autor: Robert C. Martin</p>
          <p>
            Sobre: Embora aborde práticas gerais de programação, este livro é
            especialmente valioso para desenvolvedores Java que buscam escrever
            código limpo e compreensível.
          </p>
          <p>Recomendado para: Júnior a Sênior</p>
          <p>Rank: Sênior</p>
          <p>
            Opinião: Leitura obrigatória para quem deseja melhorar a qualidade
            do código em projetos Java.
          </p>
        </div>

        {/* Livro 4 */}
        <div>
          <p>Nome: Head First Design Patterns</p>
          <p>Autor: Eric Freeman, Elisabeth Robson, Bert Bates, Kathy Sierra</p>
          <p>
            Sobre: Este livro aborda princípios e padrões de design, sendo
            essencial para desenvolvedores Java que buscam aprimorar a estrutura
            de seus sistemas.
          </p>
          <p>Recomendado para: Júnior a Sênior</p>
          <p>Rank: Júnior</p>
          <p>
            Opinião: Uma abordagem divertida e eficaz para entender padrões de
            design essenciais.
          </p>
        </div>

        {/* Livro 5 */}
        <div>
          <p>Nome: Java Concurrency in Practice</p>
          <p>
            Autor: Brian Goetz, Tim Peierls, Joshua Bloch, Joseph Bowbeer, David
            Holmes, Doug Lea
          </p>
          <p>
            Sobre: Este livro explora a concorrência em Java, fornecendo
            insights valiosos para lidar com múltiplos threads de maneira
            eficaz.
          </p>
          <p>Recomendado para: Sênior a Master</p>
          <p>Rank: Sênior</p>
          <p>
            Opinião: Leitura avançada, mas essencial para quem lida com
            concorrência em projetos Java.
          </p>
        </div>

        {/* Adicione mais livros conforme necessário */}
      </div>
    </div>
  )
}
