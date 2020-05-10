import React from 'react';

import ifomeLogo from '../../assets/ifome.jpg'


export default function Logon(){
    return(
        <div>

            <img src={ifomeLogo}/>
            Usuário<input></input>
            Senha<input></input>

            <button> Entrar</button>
            <button> Login com o Google</button>

            Crie sua conta

        </div>
    );
}