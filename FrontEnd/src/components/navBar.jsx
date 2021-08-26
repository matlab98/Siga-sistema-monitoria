import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to={`/home`}>Inicio</Link>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Monitoria
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to={`monitoria/registrar`}>Registrar</Link>
          <Link className="dropdown-item" to={`monitoria/ver`}>Ver</Link>
          <Link className="dropdown-item" to={`monitoria/ver`}>Eliminar</Link>
        </div>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Monitor
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link className="dropdown-item" to={`monitor/registrar`}>Registrar</Link>
          <Link className="dropdown-item" to={`monitor/ver`}>Ver</Link>
          <Link className="dropdown-item" to={`monitor/delete`}>Eliminar</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default NavBar
