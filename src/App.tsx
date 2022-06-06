import { Link } from 'react-router-dom'
import './App.css'

export function App() {
  return (
    <div className='nav-user'>
      <button className='link-user-type'><Link to='establishment'>Estabelecimeto</Link></button>
      <button className='link-user-type'><Link to='user'>User</Link> </button>
    </div>
  )
}
