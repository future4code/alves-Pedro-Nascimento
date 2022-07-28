import React from "react";

import './Cardpequeno.css'

function Cardpequeno(props) {
    return (
        <div className="smallcard-container">
            
            <div>
               <h4 className="email">{ props.email } email: pedro.carvalho161@gmail.com </h4>
                <p className="endereço">{ props.endereço } endereço: Rua salvador portugal</p> </div>
        </div>
    )
}

export default Cardpequeno;
