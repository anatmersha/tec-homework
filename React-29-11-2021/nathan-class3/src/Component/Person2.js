import React from "react";

class Person2 extends React.Component{
    state = {persons:[
        {id:1, firstName: "anat", lastName: "mersha"},
        {id:2, firstName: "shay", lastName: "sendeke"},
        {id:3, firstName: "Ruti", lastName: "Ayaso"},
        {id:4, firstName: "mayaan", lastName: "elias"},
    ], newPerson: "", updatedPerson: {firstName: "", lastName: ""}, inputFirst: "", inputLast: ""}

    render(){
        const {persons, updatedPerson} = this.state;
        return(

            <div>
                <input onChange={e => this.setState({inputFirst: e.target.value})} defaultValue={this.state.updatedPerson.firstName}/>
                <input onChange={e => this.setState({inputLast: e.target.value})}  defaultValue={this.state.updatedPerson.lastName}/>
                <button onClick={() => {
                let person = persons.find(it=>it.id === updatedPerson.id);
            
                person.firstName = this.state.inputFirst;
                person.lastName = this.state.inputLast;       
            
                this.setState({person, inputFirst: "", inputLast: ""})         
                }}>UPDATE</button>

                {this.state.persons.map((person, i) => {
                    return (
                    <div key={person.id}>
                        <p>{person.firstName} {person.lastName}</p>

                        <button onClick={()=> {
                            const newPersons= this.state.persons.filter(item=>item.id !== person.id)
                            this.setState({persons: newPersons})
                            }}>DELETE</button>
                        
                        <button onClick={()=> {
                            this.setState({updatedPerson: person})
                            }}>EDIT</button>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default Person2;