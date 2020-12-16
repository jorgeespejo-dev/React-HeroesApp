import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';
import { Error } from '../Error';

export const LoginScreen = ({ history }) => {

    const [ formValues, handleInputChange ] = useForm ({
        username: ''
    }); 

    const [error, setError] = useState(false);

    const {username} = formValues;

    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) =>{

        e.preventDefault();

        if (username === '' || username.length <= 3){
            setError(true);
        }else{
            const lastPath = localStorage.getItem('lastPath') || '/';
    
            dispatch({
                type: types.login,
                payload: {
                    name: username
                }
            })
            history.replace( lastPath );
        }

    }

    return (
        <div className="container mt-5">

            <div className="col-12 col-lg-6 mx-auto">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <hr />
                    <div className="form-group mb-2">
                        <label>Usuario:</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="username"
                            autoComplete="off"
                            value={username}
                            onChange={handleInputChange}
                        />
                    </div>

                    {
                        error && <Error message="Debe ingresar un usuario y debe ser mayor a 3 caracteres" />
                    }

                    <div className="form-group mb-2">
                            <label>Contraseña:</label>
                            <input 
                                className="form-control"
                                type="password"
                                disabled    
                            />
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                    <p class="text-center">Demo Curso React, debes ingresar un nombre de usuario</p>
                </form>
            </div>

        </div>
    )
}

