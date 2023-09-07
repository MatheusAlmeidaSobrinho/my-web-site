import { useLocalStorageContext } from '../../hooks/useLocalStorage'
import './AccountUser.scss'
import PhotoPerfil from '../../assets/images/potato.gif'
import FavoriteList from '../../components/FavoriteList/FavoriteList'

export default function AccountUser() {
  const { getItem } = useLocalStorageContext()
  const user = getItem('user')

  return (
    <div className="page-user">
      <div className="data-user">
        <p>PAGINA PADRAO DO USUARIO</p>
        <img src={PhotoPerfil} alt="" />
        <p>Nome: {`${user.name} ${user.lastName}`}</p>
        <p>Email: {user.email}</p>
        {/* <p>password: {user.password}</p> */}
      </div>
      <FavoriteList />
    </div>
  )
}
