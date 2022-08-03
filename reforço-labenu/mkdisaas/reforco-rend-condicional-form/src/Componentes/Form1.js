import React, { Component } from "react";

class Form1 extends Component{
    constructor(props){
        super(props)
        this.state ={
            Nome:'',
            Idade:'',
            Email:'',
        }
    }
 render() {
    return(
        <section>
           <form>
            <label>
               1. Qual o seu Nome:
                <input type='text' placeholder="Nome"/>
            </label>
            <label>
                2. seu Email:
                <input type='text' placeholder="Email"/>
            </label>
            <label>
                3. Qual a sua  Idade:
                <input type='Number' placeholder="Idade"/>
            </label>
            <label>
            4. Qual sua escolaridade?
            <button placeholder='Medio'></button>
            </label>
           </form>

           <a href="C:\Users\PEDRO\OneDrive\Documentos\GitHub\alves-Pedro-Nascimento\reforço-labenu\mkdisaas\reforco-rend-condicional-form\src\Componentes\Form2.js"><button>Continuar?</button></a>
        </section>
    )
 }
 
}
export default Form1
