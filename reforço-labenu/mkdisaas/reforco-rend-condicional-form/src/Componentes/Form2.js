import React, { Component } from "react";

class Form2 extends Component{
    constructor(props){
        super(props)
        this.state ={
              Graduaçao:'',
            Graduaçao_complementar:'',
            Email:'',
        }
    }
 render() {
    return(
        <section>
           <form>
            <label>
               5. Por que você não terminou um curso de graduação?
                <input type='text' placeholder=""/>
            </label>
            <label>
                6. Você fez algum curso complementar?:
                <input type='text' placeholder=""/>
            </label>
           
           </form>

           <button>finalizar</button>
        </section>
    )
 }
 
}
export default Form2
