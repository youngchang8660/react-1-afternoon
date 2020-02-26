import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }


    updateNumber1(val) {
        this.setState({number1: parseInt(val, 10)})
    }

    updateNumber2(val) {
        this.setState({number2: parseInt(val, 10)})
    }

    add(num1,num2) {
        let add = num1+ num2;
        this.setState({sum: add})
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="number" onChange={(e) => this.updateNumber1(e.target.value)} className="inputLine"/>
                <input type="number" onChange={(e) => this.updateNumber2(e.target.value)} className="inputLine"/>
                <button onClick={() => this.add(this.state.number1, this.state.number2)} className="confirmationButton">Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;