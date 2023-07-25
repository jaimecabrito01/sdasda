import React, { useState,useEffect } from "react";
import icon1 from "../assets/QUIF - 2.png";
import icon2 from "../assets/icon.png";
import capivara1 from "../assets/images/capivara1.jpg";
import capivara2 from "../assets/images/capivara2.jpg";
// Adicione outras importações de imagens aqui, se necessário
const images = [capivara1, capivara2]; // Adicione outras imagens aqui, se necessário

// Adicione outras importações de imagens aqui, se necessário

const reqRegister = () => {};
const Register = () => {
  const [nameGroup, setName] = useState("");
  const [integrantes, setIntegrantes] = useState("");
  const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const handleRegister = (e) => {
        e.preventDefault();
        setName(e.target.nome_grupo.value);
        setIntegrantes(e.target.integrantes.value);
        setPassword(e.target.senha.value);
      
        // Aqui vamos obter o valor do input radio (a imagem selecionada) usando o nome "imagem_perfil"
        const selectedImage = e.target.imagem_perfil.value;
        setImage(selectedImage);
    };
 
  return (
    <div>
      <div class="wrapper">
        <div class="logo">
          <img src={icon2} alt="" />
        </div>
        <div class="text-center mt-4 name">
          <img class="imageloginlogo" src={icon1} alt="" />
        </div>

        <form class="p-3 mt-3" method="post" onSubmit={handleRegister}>
          <div class="form-field d-flex align-items-center">
            <i class="fa-people-group"></i>
            <input
              type="text"
                          name="nome_grupo"
                          value={nameGroup}
                          onChange={(e)=> setName(e.target.value)}
              id="pwd"
              placeholder="Nome do grupo"
              required
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="far fa-user"></span>
            <input
              type="text"
                          name="integrantes"
                          value={integrantes}
                          onChange={(e)=>setIntegrantes(e.target.value)}
              id="userName"
              placeholder="Integrantes"
              required
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="senha"
              id="pwd"
              placeholder="Senha"
              required
            />
          </div>

          <div class="form-field d-flex align-items-center">
            <div class="text-center mt-4 name">
                          Escolha uma imagem de perfil:
                          <ul>
      {images.map((imagePath) => (
        <li key={imagePath}>
          <label>
            <input
              type="radio"
              name="imagem_perfil"
              value={imagePath}
              checked={image === imagePath}
              onChange={(e) => setImage(e.target.value)}
            />
            <img src={imagePath} alt={`Imagem ${imagePath}`} />
          </label>
        </li>
      ))}
    </ul>
              {/* <div class="radio-list">
                    
                    <div class="radio-item">
                        <input type="radio" name="imagem_perfil" value="" id="{{ imagem }}" required/>
                        <label for="{{ imagem }}">
                            <button class="btnregistro" type="button"></button>
                        </label>
                    </div>
                    
                </div> */}
            </div>
          </div>

          <button type="submit" class="btn mt-3">
            Criar
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
