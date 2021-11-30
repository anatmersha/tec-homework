import React  from "react";
import Counter  from "./Counter";

class SmarterCounter extends React.Component{
    render(){
        return(
            <div>
                <Counter/>
                <Counter/>
            </div>
        );
    }
}

export default SmarterCounter;