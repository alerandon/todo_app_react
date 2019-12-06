import React from 'react';
import ReactDOM from 'react-dom';

function Edit() {
    return (
        <p>Voy haciendo una prueba de componente....</p>
    );
}

export default Edit;

if (document.getElementById('edit')) {
    ReactDOM.render(<Edit />, document.getElementById('edit'));
}