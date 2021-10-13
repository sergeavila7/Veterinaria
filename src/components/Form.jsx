import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const FormData = ({ addCita }) => {
  // State Cita
  const [cita, updateCita] = useState({
    pet: '',
    name: '',
    date: '',
    time: '',
    signs: '',
  });

  const [error, updateError] = useState(false);

  // Función para capturar datos del input
  const handleChange = (e) => {
    updateCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer valores
  const { pet, name, date, time, signs } = cita;

  // Acción ADD Cita
  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    if (
      pet.trim() === '' ||
      name.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      signs.trim() === ''
    ) {
      updateError(true);
      return;
    }
    updateError(false);

    // Asignar ID
    cita.id = uuidv4();

    console.log(cita);

    //Crear Cita
    addCita(cita);

    // Reiniciar Form
    updateCita({ pet: '', name: '', date: '', time: '', signs: '' });
  };

  return (
    <>
      <h2>Agregar Cita</h2>
      {error ? (
        <p className='alerta-error'>Todos los campos son obligatorios</p>
      ) : null}
      <Form className='px-4' onSubmit={submitCita}>
        <Form.Group className='mb-3'>
          <Form.Label>Nombre Mascota</Form.Label>
          <Form.Control
            type='text'
            name='pet'
            placeholder='Nombre Mascota'
            onChange={handleChange}
            value={pet}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Nombre Dueño</Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder='Nombre Dueño'
            onChange={handleChange}
            value={name}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type='date'
            name='date'
            onChange={handleChange}
            value={date}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Hora</Form.Label>
          <Form.Control
            type='time'
            name='time'
            onChange={handleChange}
            value={time}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Síntomas</Form.Label>
          <Form.Control
            type='textarea'
            as='textarea'
            name='signs'
            rows={3}
            onChange={handleChange}
            value={signs}
          />
        </Form.Group>

        <Button className='btn btn-primary' type='submit' onSubmit={submitCita}>
          Guardar
        </Button>
      </Form>
    </>
  );
};

FormData.propTypes = {
  addCita: PropTypes.func.isRequired,
};

export default FormData;
