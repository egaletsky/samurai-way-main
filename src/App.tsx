import React from 'react';
import './App.css';
import './components/Accordion/Accordion';
import Accordion from "./components/Accordion/Accordion";



function App() {
    console.log('1')
    return (
        <div className="App">
            Hello, samurai! Let's go!!!
            <Header/>
            <Rating/>
            <Accordion/>
        </div>
    );
}


function Header() {
    return (
        <>This is header!</>
    );
}



function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    return (
        <div>
            <div>*Star*</div>
        </div>
    );
}

export default App;
