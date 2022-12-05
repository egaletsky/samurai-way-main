//import store from './redux/store';
import {store} from './redux/redux-store';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import {App} from './App';
import {Provider} from 'react-redux';


//let rerenderEntireTree = () => {

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);


//}


//store.subscribe(rerenderEntireTree) - есть connect? subscribe не нужен


//rerenderEntireTree()