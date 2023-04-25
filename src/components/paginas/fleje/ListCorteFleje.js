import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Listcortefleje = ({ fleje, flejes, setListUpdated }) => {

    const [filter, setFilter] = useState(""); // constante para el filtrado de datos 
    console.log(filter)

    //-------- constantes para el paginador de la tabla
    const [currentPage, setCurrentPage] = useState(1)
    const recordPerPage = 60;
    const lasIndex = currentPage * recordPerPage;
    const firsIndex = lasIndex - recordPerPage;
    const records = flejes.slice(firsIndex, lasIndex);
    const npage = Math.ceil(flejes.length / recordPerPage)
    const numbers = [...Array(npage + 1).keys()]

    const handleDelete = id => {

        const requestInit = {
            method: 'DELETE'
        }
        fetch("http://localhost:3001/fleje/delete/" + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setListUpdated(true);
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="flex justify-between py-3 pl-2">
                        <div className="relative max-w-xs">

                            <label for="table-search" class="sr-only">Search</label>
                            <div class="relative mt-4"> {/*separacion de la tabla */}
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <input
                                    onChange={e => setFilter(e.target.value)}
                                    value={filter}
                                    type="text"
                                    name="hs-table-search"
                                    id="hs-table-search"
                                    className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                    placeholder="Ingresa Algún Dato Para Buscar Fleje"
                                />
                            </div>

                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <svg
                                    className="h-3.5 w-3.5 text-gray-200"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <div className="relative">

                                <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                                    <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-3 h-3"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                            </svg>
                                        </div>
                                        <div className="hidden sm:block">
                                            Filters
                                        </div>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-1.5 w-full inline-block align-middle">

                <div className="overflow-hidden border rounded-lg">


                    <table className="table-auto overflow-x-scroll w-full block">
                        <thead className="bg-blue-300">

                            <tr>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} ID                      {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} FOLIO DE FLEJE          {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} DESCRIPCIÓN             {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} TIPO                    {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} CALIBRE                 {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} ESPESOR EN MILÍMETROS   {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} COLADA                  {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} ALMACÉN                 {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} MODELO DE FLEJE         {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} MEDIDA                  {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} STOCK KILÓGRAMO         {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} PROVEEDOR               {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} FECHA LLEGADA           {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} FECHA SALIDA            {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} TIPO CAMBIÓ             {""} </th>
                                {/* <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} PESO FÍSICO KILÓGRAMO   {""} </th> */}
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} CANTIDAD                {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} TUBOS POR CORTE         {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} OBSERVACIÓN             {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} ACCION                  {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} STATUS                  {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""}                         {""} </th>
                            </tr>
                        </thead>

                        <tbody>
                            {records.filter((fleje) =>
                                Object.values(fleje).some(
                                    (value) =>
                                        value?.toString().toLowerCase().indexOf(filter.toLowerCase()) > -1
                                )
                            )
                                .map(fleje => (
                                    <tr
                                        class="min-w-full divide-y divide-gray-900  "
                                        key={fleje.id}   >

                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.id}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.cuerpofleje}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.descripcion}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.tipo}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.calibre}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.espesormilimetros}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.colada}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.almacen}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.tipofleje}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.medida}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.pesoNeto}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.proveedor}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.fechallegada}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.fechasalida}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.tipocambio}</td>
                                        {/* <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.pesokilogramofisico}</td> */}
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.cantidad}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.tubosporcorte}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.observacion}</td>
                                        <td>
                                            <button onClick={() => handleDelete(fleje.id)}
                                                className="flex space-x-2 items-center px-3 py-0.5 drop-shadow-md">  <svg
                                                    class="fill-red-500"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                                                </svg>
                                            </button>
                                            <Link
                                                    to={`/editar-fleje/${fleje.id}`}
                                                    class="flex space-x-2 items-center px-3 py-0.5 "
                                                >
                                                    <svg
                                                        class="fill-blue-600"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0px"
                                                        y="0px"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 50 50"
                                                    >
                                                        <path d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z"></path>
                                                    </svg>

                                                </Link>
                                        </td>

                                        <td>
                                            <select className="bg-red shadow appearance-none border rounded  py-0.5 px-3 leading-tight focus:outline-none focus:shadow-outline">
                                                <option class="bg-green-300" value="true">En existencia</option>
                                                <option class="bg-red-300" value="false">Salida</option>
                                            </select>
                                        </td>

                                        <td>
                                            <div class="flex flex-row">

                                                {/* botones de un lado del otro */}

                                                <td>
                                                    <button>  <svg
                                                        class="fill-white"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0px"
                                                        y="0px"
                                                        width="25"
                                                        height="25"
                                                        aria-hidden="true"
                                                    >
                                                        {" "}
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                                                        ></path>
                                                        <svg
                                                            class="fill-white"
                                                            stroke-width="1.5"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            x="0px"
                                                            y="0px"
                                                            width="15"
                                                            height="15"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                        </svg>
                                                    </svg> </button>
                                                    <button>  <svg
                                                        class="fill-white"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0px"
                                                        y="0px"
                                                        width="25"
                                                        height="25"
                                                        aria-hidden="true"
                                                    >
                                                        {" "}
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                                                        ></path>
                                                    </svg> </button>
                                                </td>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                    <nav>
                        <ul className='pagination'>
                            <th className='page-item page-link text-blue-600 border-gray-200 rounded focus:ring-blue-500'>
                                <a href="js" className='page-link'
                                    onClick={prePage}> Anterior </a>
                            </th>

                            {
                                numbers.map((n, i) => (
                                    <th >
                                        <th className={`page-item ${currentPage === n ?
                                            'active' : ''}`} key={i}>
                                            <a href='js' className='page-link'
                                                onClick={() => changeCPage(n)} > {n} </a>
                                        </th>
                                    </th>
                                ))
                            }

                            <th className='page-item'>
                                <a href='s#' className="page-link text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                    onClick={nextPage}>Siguiente</a>

                            </th>

                        </ul>
                    </nav>
                </div>
            </div>
        </>

    )

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCPage(id) {

        setCurrentPage(id)
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
}
export default Listcortefleje;
