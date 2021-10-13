import React, { useState, useEffect } from 'react';
import FormData from './components/Form';
import Cita from './components/Cita';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Citas en LocalStorage
  let citasInitials = JSON.parse(localStorage.getItem('citas'));
  if (!citasInitials) {
    citasInitials = [];
  }

  // State Citas
  const [citas, saveCitas] = useState(citasInitials);

  // UseEffect
  useEffect(() => {
    let citasInitials = JSON.parse(localStorage.getItem('citas'));

    if (citasInitials) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);
  // Add Cita
  const addCita = (cita) => {
    saveCitas([...citas, cita]);
  };

  // Delete Cita
  const deleteCita = (id) => {
    const newCitas = citas.filter((cita) => cita.id !== id);
    saveCitas(newCitas);
  };

  const title = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas';

  return (
    <>
      <h1>Administrador de Citas</h1>
      <div className='container d-flex justify-content-around flex-wrap'>
        <div className='col-12 col-md-6'>
          <FormData addCita={addCita} />
        </div>
        <div className='col-12 col-md-6'>
          <h2>{title}</h2>
          {citas.map((cita) => (
            <Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
