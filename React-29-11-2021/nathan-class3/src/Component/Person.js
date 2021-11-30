import React from "react";

class Person extends React.Component{
    state = {persons:[
        {id:1, firstName: "anat", lastName: "mersha"},
        {id:2, firstName: "shay", lastName: "sendeke"},
        {id:3, firstName: "Ruti", lastName: "Ayaso"},
        {id:3, firstName: "mayaan", lastName: "elias"},
    ], newPerson: "", updatedFirstName: "", updatedLastName: "", updatedPerson: ""}

    deletePerson = (i) => {
        const temp = this.state.persons;
        temp.splice(i, 1);
        this.setState({persons: temp})
    }

    newFirst = (e) => {this.setState({updatedFirstName:  e.target.value})}
    newLast = (e) => {this.setState({updatedLastName:  e.target.value})}

    updatePerson = (i) => {
        this.setState({
            updatedFirstName: this.state.persons[i].firstName,
            updatedLastName: this.state.persons[i].lastName
        })
    }

    saveChange = (e) => {
        e.preventDefault();
        // const temp = this.state.persons;
        const updatedPerson = {
            id: this.state.persons[this.state.persons.length-1].id+1,
            firstName: this.state.updatedFirstName, 
            lastName:  this.state.updatedPerson
        }
    }


    render(){
        return(
            <div>
                <form onSubmit={this.saveChange}>
                    <input onChange={this.newFirst} placeholder="update first name"/>
                    <input onChange={this.newLast} placeholder="update last name"/>
                    <button>SAVE UPDATE</button>
                </form>
                {this.state.persons.map((person, i) => {
                    return (
                    <div key={i}>
                        <p>{person.firstName} {person.lastName}</p>
                        <button onClick={()=> {this.deletePerson(i)}}>DELETE</button>
                        <button onClick={()=> {this.updatePerson(i)}}>UPDATE</button>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default Person;