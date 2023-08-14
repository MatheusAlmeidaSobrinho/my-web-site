import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { contents } from '../../assets/translate/contents'
import { useAcessibility } from '../../hooks/useAcessibility'
import { useTheme } from '../../hooks/useTheme'
import { useLanguage } from '../../hooks/useLanguage'

import { useCache } from '../../hooks/useCache'

import './style.scss'

export default function Info() {
  const { theme } = useTheme()
  const { acessibility } = useAcessibility()
  const { currentLanguage } = useLanguage()
  const { cacheDataInfo, cacheDataRepos } = useCache()
  const [info, setInfo] = useState({})
  const [repository, setRepository] = useState([])

  useEffect(() => {
    setRepository(cacheDataRepos)
  }, [cacheDataRepos])

  // useEffect(() => {
  //   setRepository(cacheDataVercel)
  // }, [cacheDataVercel])

  // Número de telefone para enviar a mensagem
  const phoneNumber = '17991626699'

  // Texto da mensagem
  const message = 'Olá, gostaria de entrar em contato com você ^^.'

  // URL do link para enviar a mensagem no WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`

  useEffect(() => {
    setInfo(cacheDataInfo)
  }, [cacheDataInfo])

  return (
    <div
      className={`info-container ${theme} ${acessibility} ${currentLanguage}`}
    >
      <div className="info-container-github">
        <div className="info-github">
          <h1 className="info-title">{info.name}</h1>

          <p>{info.bio}</p>
          <p>
            {contents.info.languagesInfo[currentLanguage]}: JavaScript / Html /
            Css / React
          </p>
          <p>{contents.info.skillInfo[currentLanguage]}</p>
          <div className="info-paragraph">
            <p>
              {contents.info.followingInfo[currentLanguage]}: {info.following}
            </p>
            <p>
              {contents.info.followersInfo[currentLanguage]}:{info.followers}
            </p>
          </div>
        </div>
        <div className="info-github2">
          <img src={info.avatar_url} alt="" />
          <div className="info-paragraph">
            <Link
              to="https://www.linkedin.com/in/matheus-de-almeida-sobrinho-5bb533220/"
              target="_blank"
            >
              Linkedin
            </Link>
            <Link
              to="https://github.com/MatheusAlmeidaSobrinho"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
      <div className="info-repos">
        <h1>{contents.info.titlePageInfo[currentLanguage]}</h1>

        <div className="container-repos">
          {repository.map(repo => (
            <ul key={repo.html_url} className="list-repos">
              <li>{repo.name}</li>
              <li className="truncate">
                {repo.description ??
                  contents.info.readMeUnknownInfo[currentLanguage]}
              </li>
              <li>{repo.language ?? 'Multiplas Linguagens'}</li>
              <div className="info-button-back">
                <a href={repo.html_url} target="__blank">
                  {contents.info.buttonViewInfoPage[currentLanguage]}
                </a>
              </div>
            </ul>
          ))}
        </div>
      </div>
      <div className="info-contact">
        <p>{contents.contact.firstP[currentLanguage]}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="linkWpp"
        >
          {contents.contact.linkWpp[currentLanguage]}
        </a>
      </div>
    </div>
  )
}
