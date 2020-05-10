import React from 'react';
import './styles.css'

import Image from 'react-bootstrap/Image'

import ifomeLogo from '../../assets/ifome.jpg'


export default function Logon(){
    return(
<div className="container">
    <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-3 col-md-4" style={{marginTop : '10%'}}>
            <div className="logoprincipal">
            <Image src={ifomeLogo} height="200px" width="200px" alt="logo ifome"/>
            </div>
            <div>
                <h2>Bem vindo ao Ifome</h2>
            </div>
            <div>    
            <form>
            <input placeholder="Seu usuário"/>
            <input placeholder="Sua senha"/>
            <div>
            <button className="buttonentrar" type="submit"> Entrar </button>
            <br/>
            <button className="buttongoogle" type="submit"> Login com o Google </button>
            </div>
            <a href="/register">Crie sua conta</a>
            </form>
            
            </div>
        </div>
    </div>  
</div>
    );
}




