import React from 'react';


function Accordion(props: any) {
    return <div>

        <AccordionTitle title={props.title}/>
        <AccordionBody/>

    </div>

}

function AccordionTitle(props: any) {
    return <h3>-- {props.title} --</h3>;
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