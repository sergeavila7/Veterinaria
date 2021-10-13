import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Cita = ({ cita, deleteCita }) => (
  <div className='cita'>
    <p>
      Mascota: <span>{cita.pet}</span>
    </p>
    <p>
      Dueño: <span>{cita.name}</span>
    </p>
    <p>
      Fecha: <span>{cita.date}</span>
    </p>
    <p>
      Hora: <span>{cita.time}</span>
    </p>
    <p>
      Sintomas: <span>{cita.signs}</span>
    </p>
    <Button className='btn btn-danger' onClick={() => deleteCita(cita.id)}>
      Eliminar
    </Button>
  </div>
);

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  deleteCita: PropTypes.func.isRequired,
};

export default Cita;
