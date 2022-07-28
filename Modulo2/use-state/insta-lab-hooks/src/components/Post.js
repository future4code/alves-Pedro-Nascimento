

function Post(props) {
  // Passo5
  // Crie a lógica de estados funcionais aqui.
  state = {
    curtido: false, 
    numeroCurtidas: 0, 
    comentando: false, 
    numeroComentarios: 0,
    comentarios: [], 
    inputValue: "" 
  }
  // Passo7
  const onClickCurtida = () => {
    // Crie a lógica de onClickCurtida aqui.
     if (this.state.curtido) {
      this.setState({ curtido: !this.state.curtido, numeroCurtidas: this.state.numeroCurtidas - 1 });
    } else {
      this.setState({ curtido: !this.state.curtido, numeroCurtidas: this.state.numeroCurtidas + 1 });
  }

  // Passo7
  const onClickComentario = () => {
    // Crie a lógica de onClickComentario aqui.
    his.setState({ comentando: !this.state.comentando })
  }
 };

  // Passo7
  const onChangeComentario = (event) => {
    // Crie a lógica de onChangeComentario aqui.
    onChangeComentario = (event) => {
      this.setState({ inputValue: event.target.value })
    }
  };

  // Passo7
  const enviarComentario = (comentario) => {
    // Crie a lógica de enviarComentario aqui.
    const listaDeComentarios = [...this.state.comentarios, comentario]
    this.setState({
      comentarios: listaDeComentarios,
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      inputValue: ""
    })
  };
  

  {/* Passo6 */}
  const caixaDeComentario = this.state.comentando ?  (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
      <input
        id={"comentario"}
        value={"this.state.inputValue"}
        onChange={this.onChangeComentario}
      />
      {/* Passo4 */}
      <button button onClick={() => { this.enviarComentario(this.state.inputValue) }}>Enviar</button>
    </>
      ) : (
    // Passo8
  
      this.state.comentarios.map((comentario, index) => {
        return (
          <div key={index}>
            <p>{comentario}</p>
          </div>
        )
      })
    );

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
            <span>{this.props.nomeUsuario}</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
        <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
            <img src={this.props.fotoPost} alt={'Imagem do post'} />
          </figure>
          {/* Passo3 */}
          <span>{this.props.nomeUsuario}</span>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: {this.state.numeroCurtidas}</span>
          {/* Passo4 */}
          <button >
            {/* Passo6 */}
            {this.state.numeroCurtidas === 0 ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: {this.state.numeroComentarios}</span>
          {/* Passo4 */}
          <button onClick={this.onClickComentario}>
            {/* Passo6 */}
            {this.state.comentando ? "Fechar comentário" : "Adicionar comentário"}
            </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;