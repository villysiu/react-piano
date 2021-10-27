import React, {Component} from "react";

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        let {id, name, notes} = this.props.defaultValue
    
        this.state = {
            id: id,
            name: name,
            notes: notes
        }
        this.props.resetPianoKey()
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidUpdate = () => {
        console.log(this.props)
    if (this.props.pianoKey !== '') {
        this.setState({
            notes: this.state.notes.concat(`${this.props.pianoKey} `) 
        })
        this.props.resetPianoKey()
    }
    else {
        console.log("nothing")
    }

}

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    
        this.props.callback(this.state)

        let {id, name, notes} = this.props.defaultValue
        this.setState({
            id: id,
            name: name,
            notes: notes
        })
    }
 
    render() { 
        console.log(this.props)
        return ( 
     
            <div>
                <form onSubmit={this.handleSubmit} >
                <p>Name: <br />
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /></p>
                <p>Notes:<br />
                <textarea type='text' name="notes" value={this.state.notes} onChange={this.handleChange} /></p>
                <input type="submit"/>
                </form>
             </div>

        )
    }
}
