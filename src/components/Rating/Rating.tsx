import React from "react";

export function Rating(props:any) {
   debugger
   switch (props.stars ) {
       case 1:{
           return (
               <div>
                   <Star selected={true}/>
                   <Star selected={false}/>
                   <Star selected={false}/>
                   <Star selected={false}/>
                   <Star selected={false}/>

               </div>
           );
       }
       case 2:{
           return (
               <div>
                   <Star selected={true}/>
                   <Star selected={true}/>
                   <Star selected={false}/>
                   <Star selected={false}/>
                   <Star selected={false}/>

               </div>
           );
       }
       case 3:{
           return (
               <div>
                   <Star selected={true}/>
                   <Star selected={true}/>
                   <Star selected={true}/>
                   <Star selected={false}/>
                   <Star selected={false}/>

               </div>
           );
       }
       case 4:{
           return (
               <div>
                   <Star selected={true}/>
                   <Star selected={true}/>
                   <Star selected={true}/>
                   <Star selected={true}/>
                   <Star selected={false}/>

               </div>
           );
       }
       case 5:{
           return (
               <div>
                   <Star selected={true}/>
                   <Star selected={true}/>
                   <Star selected={true}/>
                   <Star selected={true}/>
                   <Star selected={true}/>

               </div>
           );
       }

   }

    return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>

        </div>);


}

function Star(props: any) {
debugger
    if (props.selected == true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }


}