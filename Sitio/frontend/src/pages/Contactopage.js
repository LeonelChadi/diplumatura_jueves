import '../styles/Contactopage.css';
import React, { useState } from 'react';
import axios from 'axios';



const Contactopage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="columna">
            <div className='columna contacto'>
                <h2>Contacto rápido</h2>
                <form action='/contacto' method='post' onSubmit={handleSubmit} className='formulario'>  
                <p>
                    <label for='nombre'>Nombre</label>
                    <input type='text' name='nombre' value={formData.nombre} onChange={handleChange}></input>
                </p>
                <p>
                    <label for='email'>Email</label>
                    <input type='text' name='email' value={formData.email} onChange={handleChange}></input>
                </p>
                <p>
                    <label for='telefono'>Teléfono</label>
                    <input type='text' name='telefono' value={formData.telefono} onChange={handleChange}></input>
                </p>
                <p>
                    <label for='mensaje'>Mensaje</label>
                    <textarea name='mensaje' value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                <p class='acciones'>
                    <input type='submit' value='Enviar'></input>
                </p>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
                </form>
                
            </div>
            <div className='datos'>
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien se puede contactar a traves de estos medios</p>
                <ul>
                    <li>Teléfono: 2616970283</li>
                    <li>Email: contacto_ratec@gmail.com</li>
                    <li>Twitter: @ratec</li>
                    <li>Instagram: @ratec</li>
                </ul>
            </div>
        </main>

    )
}

export default Contactopage; 