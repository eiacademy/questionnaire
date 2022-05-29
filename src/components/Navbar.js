import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <Link class="navbar-link" to="/">Home</Link>
      <Link class="navbar-link" to="/survey">Survey</Link>
    </>
  )
}