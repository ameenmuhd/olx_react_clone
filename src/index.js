import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirbaseContext} from './store/Context'
import {Context} from './store/Context'
import  firbase from './firebase/confiq'
ReactDOM.render(
<FirbaseContext.Provider value={{firbase}}>
    <Context>
   <App/>
    </Context>

</FirbaseContext.Provider>
, document.getElementById('root'));
