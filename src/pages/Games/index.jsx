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
        'https://cdna.artstation.com/p/assets/images/images/048/158/946/large/litos-lopez-blasphemous-wallpaperdf5cxv.jpg?1649340052',
        'https://hdwallsource.com/img/2019/5/blasphemous-video-game-wallpaper-68582-70920-hd-wallpapers.jpg',
        'https://images8.alphacoders.com/113/thumb-1920-1131309.jpg',
        'https://images.alphacoders.com/131/1311723.jpeg',
        'https://wallpapercave.com/wp/wp4773068.jpg'
      ],
      title: 'Blasphemous',
      description:
        'Uma horrível maldição, conhecida apenas como O Milagre, difundiu-se amplamente por toda a região  de Cvstodia e a sua população foi amaldiçoada...'
    },
    {
      id: 2,
      images: [
        'https://usercontent.one/wp/www.onono.no/wp-content/uploads/2021/03/Thymesia_09.png?media=1676933147',
        'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/08/thymesia-patch.jpg',
        'https://whatifgaming.com/wp-content/uploads/2022/08/thymesia-varg-featured.jpg',
        'https://i0.wp.com/infinitestart.com/wp-content/uploads/2022/08/Thymesia_20220809001829-scaled.jpg',
        'https://www.gamespot.com/a/uploads/screen_kubrick/679/6794662/4012278-thymesia.jpeg'
      ],
      title: 'Thymesia',
      description:
        'Reino de Hermes, outrora próspero, tombou vítima de uma grande calamidade. A alquimia, aclamada como a resposta para todos os problemas...'
    },
    {
      id: 3,
      images: [
        'https://images3.alphacoders.com/600/600925.jpg',
        'https://wallpaperset.com/w/full/c/f/7/209479.jpg',
        'https://wallpaperset.com/w/full/3/9/5/209531.jpg',
        'https://wallpaperset.com/w/full/d/5/b/209547.jpg',
        'https://wallpaperset.com/w/full/a/1/2/209543.jpg'
      ],
      title: 'Dark Souls III',
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
      image: 'https://farm6.staticflickr.com/5512/9674184368_51841e9b56.jpg',
      descont: '34,90',
      price: '19.90'
    },
    {
      id: 2,
      name: 'GTA 5',
      image:
        'https://wallpapers.com/images/featured/grand-theft-auto-v-naej4yiap4gnxh2o.jpg',
      descont: '49,49',
      price: '29.90'
    },
    {
      id: 3,
      name: 'South Park',
      image:
        'https://wallpapercosmos.com/w/full/c/8/9/43955-3840x2160-desktop-4k-south-park-background-image.jpg',
      descont: '57,90',
      price: '39.90'
    },
    {
      id: 4,
      name: 'BloodBorne',
      image: 'https://images3.alphacoders.com/103/1031859.jpg',
      descont: '89,90',
      price: '49.90'
    },
    {
      id: 5,
      name: 'Shadow of War',
      image: 'https://images8.alphacoders.com/806/thumbbig-806265.webp',
      descont: '99,99',
      price: '59.90'
    }
  ]

  return (
    <div className="games-page" style={{ padding: '1rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>DESTAQUES</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '50% 50%',
          gap: '1rem',
          padding: '1.5rem',
          border: '2px solid gray',
          borderRadius: '0.5rem',
          alignItems: 'center'
        }}
      >
        <div>
          <Slider {...imageCarouselSettings}>
            {products[currentProduct].images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  style={{
                    width: '500px',
                    height: '250px',
                    borderRadius: '0.5rem',
                    border: '2px solid gray',
                    padding: '0.05rem'
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div
          style={{
            padding: '0 1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            gap: '1rem'
          }}
        >
          <h2>{products[currentProduct].title}</h2>
          <p>{products[currentProduct].description}</p>
          <p>Price: R$ XX,XX</p>
          <button className="galaxy-button">
            <span className="button-text">Comprar</span>
            <div className="galaxy-effect"></div>
          </button>
        </div>
      </div>

      <div
        style={{
          marginTop: '0.5rem',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <button
          onClick={prevProduct}
          style={{
            borderRadius: '0.25rem',
            padding: '0.25rem',
            background: 'none',
            color: 'white',
            fontSize: '1rem'
          }}
        >
          Anterior
        </button>
        <MultiCarousel {...productCarouselSettings}>
          {products.map(product => (
            <div key={product.id}>
              <h3>{product.title}</h3>
            </div>
          ))}
        </MultiCarousel>
        <button
          onClick={nextProduct}
          style={{
            borderRadius: '0.25rem',
            padding: '0.25rem',
            background: 'none',
            color: 'white',
            fontSize: '1rem'
          }}
        >
          Próximo
        </button>
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
                textAlign: 'center'
              }}
            >
              <Link to={'../games/categoria/id'} target="_blank">
                <img
                  src={category.image}
                  alt={category.descont}
                  style={{
                    minWidth: '175px',
                    minHeight: '175px',
                    width: '175px',
                    height: '175px',
                    borderRadius: '0.25rem',
                    border: '1px solid gray'
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
