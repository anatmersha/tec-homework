import React from "react";
// react_styling_0.6
const LongText = (props)=>{
    const Color = {color: props.text.length > 5 ? "red" : "green"};
    return(
        <div>
            <p style={Color}>{props.text}</p>
        </div>
    )

}


export default LongText;