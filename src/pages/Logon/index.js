import React from 'react';

import ifomeLogo from '../../assets/ifome.jpg'


export default function Logon(){
    return(
        <div>
            <section className="logon-container">
            <img src={ifomeLogo}/>
            <form>
            
            <input placeholder="Seu usuário"/>
            <br/>
            <input placeholder="Sua Senha"/>
            </form>
            <button> Entrar</button>
            <br/>
            <button> Login com o Google</button>
            </section>
             <a href="/register">Crie sua conta</a>

        </div>
    );
}