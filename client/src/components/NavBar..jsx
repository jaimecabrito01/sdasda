import { Link } from 'react-router-dom'
import icon from '../assets/QUIF - 3.png'
import defaultImg from '../assets/default.jpg'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"  > <img className="imagelogo" src={icon} alt=""/> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <Link className='nav-link' to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link  class="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                <Link class="nav-link" to="/register">Registrar</Link>
                </li>
                <li  className="nav-item">
                <Link  class="nav-link"to="/register">Logout</Link>
                </li>
                
                
              
                        <li className="nav-item">
                  <a className="nav-link" href="">
                    <img id="imagemPerfil" className="rounded-circle account-img" src={defaultImg} alt="Imagem de perfil" />
                  </a>
                    </li>  
                
              
                </ul>


                </div>
                
            </nav>
           

        </div>
        
         
    )
}

export default NavBar