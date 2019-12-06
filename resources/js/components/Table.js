import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import toastr from 'toastr';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('table'));

 class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tareas:[],
      desc: '',
      id: '',
      showModal: false
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }

  componentDidMount() {
    this.loadData();
  }
 
  handleInput(e) {

    this.setState({desc: e.target.value});
    
  }

  handleSubmit(e) {
    var url = "/tareas";
      e.preventDefault();
      axios.post(url, {
          desc: this.state.desc
      }).then(response => {
          this.loadData();
          toastr.success('Tarea agregada');
      })
      this.setState({
          desc: ''
      });
  }

  handleOpenModal(data) {
    this.setState({ 
      showModal: true,
      id: data.id,
      desc: data.desc,
    });
  }
  
  handleCloseModal() {
    this.setState({ 
      showModal: false,
      id: '',
      desc: '' 
    });
  }  

  handleUpdate(e) {
    e.preventDefault();
    const idDesc = this.state.id;

    var url = "/tareas/" + idDesc;
    axios.put(url, {
        desc: this.state.desc
    }).then(response => {
        this.loadData();
        //console.log(response.data);
        toastr.success('Tarea cambiada');
    })
    this.setState({
      showModal: false,  
      desc: '',
      id: ''
    });    
  }

  handleDelete(id, e) {
    e.preventDefault();
    if (confirm('Desea eliminar esta tarea?')) {  
      var url = "/tareas/" + id;
      axios.delete(url).then(response => {
        this.loadData();
        toastr.success('Tarea eliminada');
      });
    }  
  }

  loadData() {

    var url = "/tareas";
    axios.get(url).then(response =>{
      
      this.setState({
        tareas: response.data
      })

    }).catch(error=>{
      alert("Error cargando.." + error)
    })

  }

  

  render() {
    return (
      <div className="overflow-x-auto">
        <Modal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal}>

        <form onSubmit={this.handleUpdate}>
      
              <div className="py-4 text-left px-6">
                
                <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-bold">Editar Tarea</p>
                </div>
        
                
                <label htmlFor="desc" className="block text-gray-700 text-sm font-bold mb-2">Tarea</label>
                <input type="text" name="desc" value={this.state.desc} onChange={this.handleInput} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" />
            
                <div className="flex justify-end pt-2">
                  <button type="submit"  className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Actualizar</button>
                  
                  <a href="#" className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400" onClick={this.handleCloseModal}>Cerrar</a>
                </div>
                
              </div>
            

        </form>
      
      </Modal>
      

      <div className="w-auto md:w-4/6 mx-auto ">
      
        <form className="flex flex-shrink w-auto mx-10 md:mr-0 sm:justify-end mb-5" onSubmit={this.handleSubmit}>

          <label htmlFor="desc" className="text-gray-700 block font-bold mb-2 py-2 px-4">Nueva tarea: </label>
          <input type="text" className="bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-lg py-2 px-4 appearance-none leading-normal mr-5 mb-2" name="desc" value={this.state.desc} onChange={this.handleInput} placeholder="Nueva Tarea" />

          <button type="submit" className="bg-blue-400 hover:bg-blue-800 text-white font-bold mb-2 py-2 px-4 rounded">Añadir</button>

        </form>

        
        <table className="border-collapse border table-auto overflow-x-auto lg:w-full mx-10 md:mx-auto lg:mx-0">
          <thead>
            <tr className="bg-gray-200">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Tarea</th>
                <th className="px-4 py-2" colSpan="2">
                    &nbsp;
                </th>
              </tr>
          </thead>
          <tbody>
              {this.listData()}
          </tbody>
        </table>
      
      </div>  

    </div>
    );
  }

  listData() {

    return this.state.tareas.map((data, i) => {

      return (
        <tr key={i}>
          <td className="border px-4 py-2">{ i+1 }</td>
          <td className="border px-4 py-2">{ data.desc }</td>
              <td className="border px-4 py-2">
                  <a href="#" className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 float-right" onClick={()=>this.handleOpenModal(data)}>Editar</a>
              </td>
              <td className="border px-4 py-2">
                  <a href="#" className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 float-right" onClick={this.handleDelete.bind(this, data.id)}>Eliminar</a>
              </td>
          </tr>
      );

    })

  }

}

export default Table;

if (document.getElementById('table')) {
    ReactDOM.render(<Table />, document.getElementById('table'));
}