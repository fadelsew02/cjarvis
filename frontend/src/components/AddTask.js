import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTask = ({ onAddTask }) => {
  const newTaskRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(newTaskRef.current.value);
    navigate('/');
  };

  return (
    <section>
      <h1 className='m-3'>Nouvelle tâche</h1>
      <div className='card mx-3'>
        <form className='card-body' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='taskName'>Nom de la tâche</label>
            <input
              type='text'
              className='form-control'
              name='taskName'
              id='taskName'
              required
              ref={newTaskRef}
            />
          </div>
          <button type='submit' className='btn btn-primary'>Créer</button>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
