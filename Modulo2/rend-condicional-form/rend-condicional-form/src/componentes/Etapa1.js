import React, { Component }  from "react";


class Etapa1 extends Component{
    constructor(props){
        super(props)
    
     this.state = {
        nome:'',
        idade:'',
        email:'',
    }
       
    
    }
    evento (e) {
        this.setState({
        nome: e.target.value,
        idade:e.target.value,
        email:e.target.value,
    })
}
    
    render() {
        
    
     return (
            <section>
                <form>
                    <label>
                        <input onChange={this.evento} type='text' placeholder="1.Qual o seu nome?" />
                    </label>
                    <label>
                        <input onChange={this.evento}  type='text' placeholder="2.Qual a sua idade?" />
                    </label>
                    <label>
                        <input onChange={this.evento}  type='text' placeholder="3.Qual o seu email?" />
                    </label>
                    <button onChange={this.evento}  Type='Submit'>Proxima Etapa</button>
                </form>
            </section>
        )
        }
    }
export default Etapa1