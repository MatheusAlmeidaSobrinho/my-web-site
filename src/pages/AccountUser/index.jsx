import { useLocalStorageContext } from '../../hooks/useLocalStorage'

export default function AccountUser() {
  const { getItem } = useLocalStorageContext()
  const user = getItem('user')

  return (
    <div>
      <p>PAGINA PADRAO DO USUARIO</p>
      <p>Nome: {`${user.name} ${user.lastName}`}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}
