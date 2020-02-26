import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            Palindrome: ''
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    isPalindrome(userInput) {
        let forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if(forwards === backwards) {
            this.setState({Palindrome: 'true'})
        }   else {
            this.setState({Palindrome: 'false'})
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input onChange={(e) => this.handleChange(e.target.value)} className="inputLine"/>
                <button onClick={() => this.isPalindrome(this.state.userInput)} className="confirmationButton">Check</button>
                <span className="resultsBox">Palindrome: {this.state.Palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;