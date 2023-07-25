import  icon from '../assets/icon.png'
const ImageProfile = () => {
    return (
        <div>
            <li className="nav-item">
                  <a className="nav-link" href="">
                    <img id="imagemPerfil" className="rounded-circle account-img" src={icon} alt="Imagem de perfil" />
                  </a>
                    </li>
        </div>
    )
}