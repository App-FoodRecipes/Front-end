import React from 'react';


import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Logon from './pages/Logon'

function Routes(){
 return (
     <BrowserRouter>
     <Switch>
         <Route path="/login" component={Logon}/>
     </Switch>
     </BrowserRouter>
 )

}

export default Routes;