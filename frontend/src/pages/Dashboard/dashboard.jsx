import React from 'react'

import './style.css'

const Dashboard = () => {
  return (
    
    <main style={{    display: 'flex', background: 'black', opacity: '.4', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '20px' }}>
      <section style={{ height: '70%', width: '60%', background: 'white', opacity: '1', borderRadius: '10px', padding: '20px'      }}>
        <h4 style={{ color: 'black', opacity: '1', fontSize: '20px'}}>Add</h4>
        <hr style={{ width: '10px', position: 'relative', top: '-10px', color: 'black', opacity: '1'}}/>
        <div className="form-container">
        {/* Première colonne : Ajouter une tâche */}
        <div className="column">
          <div>
            <label htmlFor="taskTitle">Titre de la tâche</label>
            <input type="text" id="taskTitle" name="taskTitle" />
          </div>
          <div>
            <label htmlFor="taskDescription">Description de la tâche</label>
            <textarea id="taskDescription" name="taskDescription"></textarea>
          </div>
        </div>
        
        {/* Deuxième colonne : Renseigner les heures libres */}
        <div className="column">
          <div>
            <label htmlFor="freeDays">Jours disponibles</label>
            <input type="text" id="freeDays" name="freeDays" placeholder="Ex: Lundi, Mercredi, Vendredi" />
          </div>
          <div>
            <label htmlFor="freeHours">Heures disponibles</label>
            <input type="text" id="freeHours" name="freeHours" placeholder="Ex: 14h-16h" />
          </div>
        </div>
        
        <button type="submit">Planifier</button>
      </div>
</section>
   </main>
   
  )
}

export default Dashboard




