import React from "react";
import EmployeeObj from "./EmployeeObj";


class Employees extends React.Component{
    render(){
        const Employee1={name:"Shoshi",jobTitle:"Executive",age:54,image:"https://cdn.pixabay.com/photo/2020/10/20/20/41/horse-5671492__340.jpg"};
        const Employee2={name:"Dana",jobTitle:"Cleaner",age:24,image:"https://cdn.pixabay.com/photo/2020/02/14/15/35/dog-4848668__340.jpg"};
        const Employee3={name:"Ronit",jobTitle:"Secritary",age:34,image:"https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg"};
        return(
            <div style={{display:"flex"}}>
                <EmployeeObj  Employee={Employee1}/>
                <EmployeeObj Employee={Employee2}/>
                <EmployeeObj Employee={Employee3}/>
            </div>
        )
    }
}
export default Employees;