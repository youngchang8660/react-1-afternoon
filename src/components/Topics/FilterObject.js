import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: '',
            filteredEmployees: []
        }
    }

    inputEvent(val) {
        this.setState({userInput: val})
    }

    filterEmployees(prop) {
        let employees = this.state.employees;
        let filteredEmployees = [];
        for(let i =0; i < employees.length; i++) {
            if(employees[i].hasOwnProperty(prop)) {
                filteredEmployees.push(employees[i])
            }
        }
        this.setState({filteredEmployees: filteredEmployees})
    }


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.employees, null, 10) }</span>
                <input onChange={(e) => this.inputEvent(e.target.value)} className="inputLine"/>
                <button className="confirmationButton" onClick={() => {this.filterEmployees(this.state.userInput)}}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject;