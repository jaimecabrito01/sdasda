import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/"  > <img class="imagelogo" src="" alt=""/> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <Link to="/">Home</Link>
                </li>
                <li class="nav-item">
                <Link to="/register">Login</Link>
                </li>
                <li class="nav-item">
                <Link to="/register">Registrar</Link>
                </li>
                <li class="nav-item">
                <Link to="/register">Logout</Link>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link" href="">
                    <img id="imagemPerfil" class="rounded-circle account-img" src="" alt="Imagem de perfil" />
                  </a>
                    </li>
                   
              
                </ul>


                </div>
                
            </nav>
           

        </div>
        
         
    )
}

export default NavBar