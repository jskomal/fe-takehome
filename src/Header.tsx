import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='main-title'>
      <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
        <h1>Sound and Color</h1>
      </Link>
      <p className='subtitle'>From the New York Times API</p>
    </div>
  )
}
