import React from "react";

const Input = () => {
const onchange = e => {
    console.log(e.target.value);
}
    return (
        <div>
            <input onChange={onchange} type="text"></input>
            {/* <p>{e.target.value}</p> */}
        </div>
    );
}


// class Input extends React.Component{
//     constructor(props){
//     }
//         render(){
//         return (
//             <div>
//                 <input onChange={this.LogInput} type="text">{props.input}</input>
//             </div>
//         );        
//         }
//     }


export default Input;