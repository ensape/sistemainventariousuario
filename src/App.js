import React from 'react';
import { Routes, Route } from 'react-router-dom';

// importaciones de bobinas
import Nuevabobina from './components/paginas/bobina/NuevaBobina';
import Listbobina from './components/paginas/bobina/ListBobina';
import Editbobina from './components/paginas/bobina/EditBobina';
import QRCodePagebobina from './components/paginas/bobina/CodigoQrBobina';

// importaciones de flejes
import Nuevocortefleje from './components/paginas/fleje/NuevoCorteFleje';
import Listcortefleje from './components/paginas/fleje/ListCorteFleje';
import Editcortefleje from './components/paginas/fleje/EditCorteFleje';
import QRCodePagefleje from './components/paginas/fleje/CodigoQrFleje';

import Menu from './components/paginas/Menu';
import Inicio from './components/paginas/Inicio';

import Sidebar from './components/browser/Sidebar'; //Importacion de Barra lateral Sidebar.js
import {AuthProvider} from './components/context/authContext';

import Login from './components/paginas/Login';
import { useState, useEffect } from 'react';


function App() {

  const [listUpdated, setListUpdated] = useState(false);   // constante para eliminar y actualizar bobina

  // ---------------------- BOBINA -------------------------------------
  const [bobina, setBobina] = useState({ // Constante para agregar Bobina 
    cuerpobobina: '',
    descripcion: '',
    tipo: '',
    calibre: '',
    anchoreal: '',
    espesorreal: '',
    pesoActual: '',
    proveedor: '',
    fechaingreso: '',
    tipocambio: '',
    colada: '',
    costodolarfactura: '',
    costodolarprorroteado: '',
    costomn: '',
    pesoNeto: '',
    sobrante: '',
    observacion: ''
  });

  const [bobinas, setBobinas] = useState([]); // listado de bobinas

  useEffect(() => { //Obtener las bobinas
    const getBobinas = () => {
      fetch("http://localhost:3001/bobinas/list/")
        .then(res => res.json())
        .then(res => setBobinas(res))
    }
    getBobinas(); // 
    setListUpdated(false)
  }, [listUpdated])
  // ---------------------- BOBINA -------------------------------------

  // ---------------------- FLEJE -------------------------------------
  const [fleje, setFleje] = useState({ // constante para agregar fleje
    cuerpofleje: '',
    descripcion: '',
    tipo: '',
    calibre: '',
    espesormilimetros: '',
    colada: '',
    almacen: '',
    tipofleje: '',
    medida: '',
    pesoNeto: '',
    proveedor: '',
    fechallegada: '',
    fechasalida: '',
    tipocambio: '',
    // pesokilogramofisico: '',
    cantidad: '',
    tubosporcorte: '',
    observacion: '',
  });

  //--------  const [listUpdated, setListUpdated ] = useState(false);   // constante para eliminar y actualizar bobina

  const [flejes, setFlejes] = useState([]); // listado de bobinas

  useEffect(() => { //Obtener las bobinas
    const getFlejes = () => {
      fetch("http://localhost:3001/flejes/list/")
        .then(res => res.json())
        .then(res => setFlejes(res))
    }
    getFlejes(); // 
    setListUpdated(false)
  }, [listUpdated])
  // ---------------------- FLEJE -------------------------------------


  return (

    <div className='md:flex min-h-screen'>

      <Sidebar />

      <div className='md:w-4/5 xl:w-4/5 p-6'>
      <AuthProvider>
        <Routes>

          <Route path='/login' element={<Login />} />

          <Route path="/menu" element={< Menu />} />
          <Route path="/" element={<Inicio />} />

          <Route exact path="/nueva-bobina" element={<Nuevabobina bobina={bobina} setBobina={setBobina} />} />
          <Route exact path="/list-bobina" element={<Listbobina bobina={bobina} setBobina={setBobina} bobinas={bobinas} setListUpdated={setListUpdated} />} />
          <Route exact path='/editar-bobina/:id' element={<Editbobina bobina={bobina} setBobina={setBobina} bobinas={bobinas} setListUpdated={setListUpdated} />} />
          <Route exact path='/generar-qrbobina' element={<QRCodePagebobina bobina={bobina} setBobina={setBobina} bobinas={bobinas} setListUpdated={setListUpdated} />} />

          <Route exact path="/nuevo-corte-fleje/:id" element={<Nuevocortefleje fleje={fleje} setFleje={setFleje} flejes={flejes} />} />
          <Route exact path="/list-fleje" element={<Listcortefleje fleje={fleje} setFleje={setFleje} flejes={flejes} setListUpdated={setListUpdated} />} />
          <Route exact path='/generar-qrfleje' element={<QRCodePagefleje fleje={fleje} setFleje={setFleje} flejes={flejes} setListUpdated={setListUpdated} />} />
          <Route exact path="/editar-fleje/:id" element={<Editcortefleje fleje={fleje} setFleje={setFleje} flejes={flejes} setListUpdated={setListUpdated} />} />
        
        </Routes>
      </AuthProvider>
      </div>
    </div>
  );
};

export default App;
