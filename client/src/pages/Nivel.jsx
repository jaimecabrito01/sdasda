const Nivel = () => {
    return (
        <div>
            <div className="container ">
  <h2 className="perguntaquiz"></h2>

  <div className="row">
    <div className="col-md-6 offset-md-3">
      <img  alt="Imagem do Quiz"
        className="text-center img-fluid imgQuiz" />
    </div>
  </div>
  <form action="/nivel_1" id="meuFormulario" method="post">
    <div className="col-md-6">
      <div className="radio-list">
        <div className="radio-item">
          <input type="radio" name="resposta" id="radio1" value="A" />
          <label for="radio1">
            
          </label>
        </div>
        <div className="radio-item">
          <input type="radio" name="resposta"id="radio2" value="B"/>
          <label for="radio2"></label>
        </div>
        <div className="radio-item">
          <input type="radio" name="resposta" id="radio3" value="C"/>
          <label for="radio3"></label>
        </div>
        <div className="radio-item">
          <input type="radio" name="resposta" id="radio4" value="D"/>
          <label for="radio4"></label>
        </div>
       
        <button  type="button" className="buttontmp" >Enviar</button>
      </div>
    </div>
    <div>
    </div>
  </form>
</div>
        </div>
    )
}
export default Nivel