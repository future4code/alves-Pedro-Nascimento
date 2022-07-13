import React,{useState}from 'react';

const loginPage= ()=> {
    const [email, setEmail]= useState("")
    const[password, setPassword]= useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();

console.log ("submit",{email,password})
    };
    return(
        <div id="login">
            <h1 className="title"> login do site</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">email</label>
                    <input type="email" name='email' id='email
                    ' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">senha</label>
                    <input type="password" name='password' id='password' 
                    value={password} onChange={(e)=>setPassword (e.target.value)} />
                </div>
                <div className="actions">
                    <button type="submit">entrar </button>
                </div>
            </form>
        </div>
    )
}
export default loginPage
