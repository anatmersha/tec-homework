import React from "react";
import BakedGood from "./BakedGood";

class BakedGoods extends React.Component{

render(){
    const Baked1={name:"Candies",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi labore quo quas illum architecto inventore totam aliquid.",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_549787.png&f=1&nofb=1"};
    const Baked2={name:"Cake",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi labore quo quas illum architecto inventore totam aliquid.",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fthin-food-cooking%2F24%2Fthin-0915_cake_birthday_anniversary-512.png&f=1&nofb=1"};
    const Baked3={name:"Biscuit",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi labore quo quas illum architecto inventore totam aliquid.",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_482799.png&f=1&nofb=1"};
    const Baked4={name:"Bread",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi labore quo quas illum architecto inventore totam aliquid.",img:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_478096.png&f=1&nofb=1"};
    const Baked5={name:"Croissants",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi labore quo quas illum architecto inventore totam aliquid.",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Ffast-food-outline-6%2F64%2FBistro-croissant-food-restaurant-512.png&f=1&nofb=1"};
    const Baked6={name:"Lollipop",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi labore quo quas illum architecto inventore totam aliquid.",img:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_549802.png&f=1&nofb=1"};
    return(
        <div style={{display:"flex"}}>
            <BakedGood Baked={Baked1}/>
            <BakedGood Baked={Baked2}/>
            <BakedGood Baked={Baked3}/>
            <BakedGood Baked={Baked4}/>
            <BakedGood Baked={Baked5}/>
            <BakedGood Baked={Baked6}/>
        </div>
    )
}
}
export default BakedGoods;