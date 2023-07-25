import icon from '../assets/icon.png'
const Login = () => {
    return (
        <div>
      

            
            <div class="wrapper">
    <div class="logo">
        <img src={icon} alt=""/>
    </div>
    <div class="text-center mt-4 name">
        QUIF
    </div>
    <form class="p-3 mt-3" action="" method="post">
        <div class="form-field d-flex align-items-center">
            <span class="far fa-user"></span>
            <input type="text" name="nome_grupo" id="userName" placeholder="Username" required/>
        </div>
        <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input type="password" name="senha" id="pwd" placeholder="Password" require/>
        </div>
        <button class="btn mt-3">Login</button>
    </form>
    <div class="text-center fs-6">
        <a href="">Não tem login, clique aqui.</a>
    </div>
</div>
        </div>
        
    )
}

export default Login