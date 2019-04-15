import React from 'react';

class SearchBar extends React.Component {

    // //event handlers
    // //a function - a callback function
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }
    // //(event) => console.log(event.target.value)

    //this shit basically remake the sensation of no value defined and just event.target.value
    state = { term: ' ' };

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }
    //to avoid form from submitting and refreshing the page when you type in form
    //arrow function automatically bind value of "this" for all code inside function
    //you don't need to use super to bind this


    // onFormSubmit: function (event){
    //     event.preventDefault();
    // }
    //  is the same as below
    // //onFormSubmit(event){
    //     blah
    // }


    onFormSubmit=(event)=> {
        event.preventDefault();

        console.log(this.state.term);
    }



    render() {
        return (
        <div className = 'ui segment'>
            <form onSubmit = {this.onFormSubmit} className = 'ui form'>
                <div className = 'field'>
                    <label>Image Search</label>
                    {/* <input type = "text"  value = {this.state.term} onChange = {e => {this.setState({term: e.target.value})}} /> */}
                    <input type = "text"  value = {this.state.term} onChange = {this.onInputChange} />
                </div>

            </form>
        </div>
        )
    }

}

export default SearchBar;