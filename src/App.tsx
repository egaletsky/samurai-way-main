import React from 'react';
import './App.css';
import './components/Accordion/Accordion';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    console.log('1')
    return (
        <div className="App">
            Hello, samurai! Let's go!!!
         Article 1
            <Rating stars ={3}/>



            Article 222


            <Accordion/>
        </div>
    );
}


function PageTitle(props: any) {
    return (
        <h1>{props.title}</h1>

    );
}



export default App;
