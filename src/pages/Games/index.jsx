import { useState } from 'react'
// import { useEffect } from 'react'
// import { useAuthContext } from '../../hooks/useAuth'
// import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import styles from '../../pages/ToolsIA/ToolsIA.module.scss'
import Tags from '../../components/Tags'
import Cards from './Cards'
import 'react-multi-carousel/lib/styles.css'
import MultiCarousel from 'react-multi-carousel'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import fotos from './fotos.json'
import './Games.scss'

function Games() {
  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map(valor => valor.tag))]
  const [tagSelecionada, setTagSelecionada] = useState('Todas')

  const filtraFotos = tag => {
    if (!tag) {
      // Se o parâmetro "tag" for undefined, define a tag selecionada como "Todas"
      setItens(fotos)
      setTagSelecionada('Todas')
    } else {
      const novasFotos = fotos.filter(foto => foto.tag === tag)
      setItens(novasFotos)
      setTagSelecionada(tag)
    }
  }
  // const { isAuthenticated } = useAuthContext()
  // const navigate = useNavigate()
  // const MySwal = withReactContent(Swal)

  // useEffect(() => {
  //   if (!isAuthenticated()) {
  //     MySwal.fire({
  //       icon: 'error',
  //       text: 'Realize o login para visitar esta página!'
  //     })
  //     navigate('/login')
  //   }
  // }, [isAuthenticated, navigate, MySwal])

  const products = [
    {
      id: 1,
      images: [
        'https://picsum.photos/id/200/550/200',
        'https://picsum.photos/id/201/550/200',
        'https://picsum.photos/id/202/550/200',
        'https://picsum.photos/id/203/550/200',
        'https://picsum.photos/id/204/550/200'
      ],
      title: 'Blasphemous',
      description:
        'Uma horrível maldição, conhecida apenas como O Milagre, caiu sobre a terra de Cvstodia e a sua população...'
    },
    {
      id: 2,
      images: [
        'https://picsum.photos/id/225/550/200',
        'https://picsum.photos/id/216/550/200',
        'https://picsum.photos/id/227/550/200',
        'https://picsum.photos/id/228/550/200',
        'https://picsum.photos/id/229/550/200'
      ],
      title: 'Thymesia',
      description:
        'reino de Hermes, outrora próspero, tombou vítima de uma grande calamidade.A alquimia, aclamada como a resposta para todos os problemas, difundiu-se amplamente por toda a região. ...'
    },
    {
      id: 3,
      images: [
        'https://picsum.photos/id/210/550/200',
        'https://picsum.photos/id/211/550/200',
        'https://picsum.photos/id/212/550/200',
        'https://picsum.photos/id/213/550/200',
        'https://picsum.photos/id/214/550/200'
      ],
      title: 'Dark Souls 3',
      description:
        'Com o fogo se apagando e o mundo caindo em ruínas, você precisa se aventurar em um universo repleto de inimigos e ambientes colossais...'
    }
  ]

  const [currentProduct, setCurrentProduct] = useState(0)

  const handleProductChange = index => {
    setCurrentProduct(index)
  }

  const nextProduct = () => {
    const nextProductIndex = (currentProduct + 1) % products.length
    setCurrentProduct(nextProductIndex)
  }

  const prevProduct = () => {
    const prevProductIndex =
      (currentProduct - 1 + products.length) % products.length
    setCurrentProduct(prevProductIndex)
  }

  const productCarouselSettings = {
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    },
    showDots: true,
    arrows: true,
    swipeable: true,
    draggable: true,
    afterChange: handleProductChange
  }

  const imageCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const promotions = [
    {
      id: 1,
      name: 'Dark souls 2',
      image: 'https://picsum.photos/200',
      descont: '34,90',
      price: '19.90'
    },
    {
      id: 2,
      name: 'Doom',
      image: 'https://picsum.photos/200',
      descont: '49,49',
      price: '29.90'
    },
    {
      id: 3,
      name: 'South Park',
      image: 'https://picsum.photos/200',
      descont: '57,90',
      price: '39.90'
    },
    {
      id: 4,
      name: 'BloodBorne',
      image: 'https://picsum.photos/200',
      descont: '89,90',
      price: '49.90'
    },
    {
      id: 5,
      name: 'Shadow War',
      image: 'https://picsum.photos/200',
      descont: '99,99',
      price: '59.90'
    }
  ]

  return (
    <div className="games-page" style={{ padding: '1rem' }}>
      <h2>DESTAQUES</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '50% 50%',
          gap: '1rem',
          padding: '1rem'
        }}
      >
        <div>
          <Slider {...imageCarouselSettings}>
            {products[currentProduct].images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Imagem ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div style={{ padding: '20px' }}>
          <h2>{products[currentProduct].title}</h2>
          <p>{products[currentProduct].description}</p>
        </div>
      </div>
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <button onClick={prevProduct}>Anterior</button>
        <MultiCarousel {...productCarouselSettings}>
          {products.map(product => (
            <div key={product.id}>
              <h3>{product.title}</h3>
            </div>
          ))}
        </MultiCarousel>
        <button onClick={nextProduct}>Próximo</button>
      </div>

      <div
        style={{
          marginTop: '1rem'
        }}
      >
        <h2 style={{ marginBottom: '1rem' }}>PROMOÇÕES</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '1rem'
          }}
        >
          {promotions.map(category => (
            <div
              key={category.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                width: '17.5%'
              }}
            >
              <Link to={'../games/categoria/id'} target="_blank">
                <img
                  src={category.image}
                  alt={category.descont}
                  style={{
                    opacity: '0.75'
                  }}
                />
                {category.name}
              </Link>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1rem'
                }}
              >
                <p style={{ textDecoration: 'line-through red 2px' }}>
                  {category.descont}
                </p>
                <p style={{ fontSize: '1.25rem' }}>{category.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="games-for-category">
        <Tags
          tags={tags}
          filtraFotos={filtraFotos}
          setItens={setItens}
          tagSelecionada={tagSelecionada}
        />
        <Cards itens={itens} styles={styles} />
      </div>
    </div>
  )
}

export default Games
