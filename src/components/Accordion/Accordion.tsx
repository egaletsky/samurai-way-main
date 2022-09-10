import React from 'react';


function Accordion() {
    return <div>
        <AccordionTitle/>
        <AccordionBody/>

    </div>

}

function AccordionTitle() {
    return <h3>Menu11111111</h3>;
}

function AccordionBody() {
    return <ul>

        <li>1 element</li>
        <li>2 element</li>
        <li>3 element</li>
        <li>4 element</li>
        <li>5 element</li>

    </ul>;
}

export default Accordion;