import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const url = "/tareas";

class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            desc: ''

        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

        handleInput(e) {
            console.log(this.state);
            this.setState({desc: e.target.value});
            
        }

        handleSubmit(e) {
            e.preventDefault();
            axios.post(url, {
                desc: this.state.desc
            }).then(response => {
                this.props.onData
                console.log(response.data)
            })
            this.setState({
                desc: ''
            });
        }

        render() {
            return (
                <form className="flex justify-end w-full mb-5 ml-40" onSubmit={this.handleSubmit}>

                    <input type="text" className="bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-lg py-2 px-4 appearance-none leading-normal mr-4" name="desc" value={this.state.desc} onChange={this.handleInput} placeholder="Nueva Tarea" />

                    <button type="submit" className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-64">+ tareas</button>

                </form>
            );

        }
}


export default Create;

if (document.getElementById('create')) {
    ReactDOM.render(<Create />, document.getElementById('create'));
}
