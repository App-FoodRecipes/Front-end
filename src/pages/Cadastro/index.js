import React from 'react';
import './styles.css'

import Image from 'react-bootstrap/Image'

import ifomeLogo from '../../assets/ifome.jpg'


const Register = () => {
    const handleSubmit = (value) => {
        console.log("TESTE");
    }
    return(
<div className="container">
    <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-3 col-md-4" style={{marginTop : '10%'}} >
            <div className="logoprincipal">
            <Image src={ifomeLogo} height="200px" width="200px" alt="logo Ifome" roundedCircle thumbnail/>
            </div>
            <div>
                <h2>Bem vindo ao Ifome</h2>
            </div>
            <form initialvalues={{}} onSubmit={handleSubmit}>
            <input id="name" placeholder="Usuário"/>
            <input id="senha" type="password" placeholder="Senha"/>
            <div>
            <button className="buttonentrar" type="submit"> Entrar </button>
            <br/>
            <button className="buttongoogle" type="submit"> Login com o Google </button>
            </div>
            <div style={{marginTop : '10%'}}>
            <a href="/register">Crie sua conta</a>
            </div>
            </form>
        </div>
    </div>  
</div>
    );
}

export default Register;
