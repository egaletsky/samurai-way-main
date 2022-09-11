import React from 'react';
import './App.css';
import './components/Accordion/Accordion';
import './Technologies'
import './Header'
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import Technologies from "./Technologies";
import Header from "./Header";




const App = () => {

    return (
        <div className="App">
            Simple HTML
            <Header/>
            <Technologies/>
        </div>
    );
}




/*
console.log('1')
return (
<div className="App">
Hello, samurai! Let's go!!!
Article 1
<Rating stars ={3}/>
Article 222
<Accordion title = {'Menu'}/>
<Accordion title = {'Users'}/>
</div>
);
}


*/


function PageTitle(props: any) {
    return (
        <h1>{props.title}</h1>

    );
}


export default App;
