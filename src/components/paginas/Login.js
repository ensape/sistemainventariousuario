import React, { useState } from 'react';


 function Login() {

    const [credentials, setCredentials] = useState({
        username : "",
        password : ""
    });

    const handleChange = (e) => {
        //e.target.value = lo que el usuario va tipeado en el input
        //e.target.name = atributo name del input
        let { name, value  } = e.target;
        let newCredentials = {...credentials, [name] : value};
        setCredentials(newCredentials);
    };

    const handleSubmit =  async (e) => { // asyn: asincrono  espera a que se ejecute una funcion 
        e.preventDefault(); // detener el formulario
        console.log(credentials);
        try {
            const credentialsInit = {
                   method: 'POST',
                   headers: { 'Content-Type': 'application/json' },
                   body: JSON.stringify({username : credentials.username, password : credentials.password})
            }
            fetch("http://localhost:3001/usuario/login", credentialsInit )
                 .then(res => res.text())
                 .then(res => console.log(res))
            //navigate('/inicio')
        } catch (error) {
            console.log(error).json('aquinose que deve pasea');
        } 
    };


    return (
        <form onSubmit={handleSubmit}  >
            <div class="mb-6">
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NOMBRE DE USUARIO</label>
                <input
                    name='username'
                    type="username"
                    id="username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="................"
                    onChange={handleChange}
                    value={credentials.username}
                    required>
                </input>
                <div className='invalid-feedback'> NOMBRE DE USUARIO INVALIDO  </div>
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CONTRASEÑA</label>
                <input
                    name='password'
                    type="password"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                    value={credentials.password}
                    required>
                </input>
                <div className='invalid-feedback'> CONTRASEÑA INVALIDO  </div>
            </div>

            <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Iniciar
            </button>
        </form>
    );
};
export default Login;