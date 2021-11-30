import React from "react";
import FoodCategory from "./FoodCategory";

class FoodCategories extends React.Component{
    render(){
        const category1={name:"pizza", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.", img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.biotropic.com%2Fimages%2Fheisszeit%2Fproduktbilder%2F21632_HZT_Pizza_Funghi_gebacken.png&f=1&nofb=1"};
        const category2={name:"salads", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.", img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd37rttg87jr6ah.cloudfront.net%2Fstatic%2Fproduct_photo_web%2Fgreek_salad-2020-08-24-18-00-33_1242x1242.png&f=1&nofb=1"};
        const category3={name:"desserts", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.", img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flacremiere.com%2Fwp-content%2Fuploads%2F2017%2F11%2FCarreChoco-1024x877.png&f=1&nofb=1"};
        return(
            <div style={{display:"flex"}}>
                <FoodCategory Category={category1}/>
                <FoodCategory Category={category2}/>
                <FoodCategory Category={category3}/>
            </div>
        )
    }
}


export default FoodCategories;
