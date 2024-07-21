import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './styl.css';


const Signin = () => {
    const navigate = useNavigate();
      const [email, setEmail] = useState('test@example.com'); // Valeur initiale pour l'email
  const [password, setPassword] = useState('password'); 

const handleSubmit = (event) => {
    event.preventDefault();
    // Simulating a login check
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (email === "test@example.com" && password === "password") {
      navigate('/add-task');
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div className="unix-login">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="login-content">

                            <div className="login-form">
                                <h4>CJARVIS - Se Connecter</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Adresse Email</label>
                                        <input type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required />
                                    </div>
                                    <div className="form-group">
                                        <label>Mot de passe</label>
                                        <input type="password"
                      name="password"
                      className="form-control"
                      placeholder="Mot de passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required />
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary btn-flat m-b-30 m-t-30">Se connecter</button>

                                   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Signin