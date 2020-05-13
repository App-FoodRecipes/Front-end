import React from 'react';


import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Cadastro'

function Routes(){
 return (
     <BrowserRouter>
     <Switch>
         <Route exact path="/login"  component={Logon}/>
         <Route exact path="/register" component={Register}/>
     </Switch>
     </BrowserRouter>
 )

}

export default Routes;