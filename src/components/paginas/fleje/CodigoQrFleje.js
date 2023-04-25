import React, { useState } from 'react';
import QRCode from 'react-qr-code';


const Listcortefleje = ({ fleje, flejes, setListUpdated }) => {

    const [filter, setFilter] = useState(""); // constante para el filtrado de datos 
    console.log(filter)

    //-------- constantes para el paginador de la tabla
    const [currentPage, setCurrentPage] = useState(1)
    const recordPerPage = 2 ;
    const lasIndex = currentPage * recordPerPage;
    const firsIndex = lasIndex - recordPerPage;
    const records = flejes.slice(firsIndex, lasIndex);
    const npage = Math.ceil(flejes.length / recordPerPage)
    const numbers = [...Array(npage + 1).keys()]



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
                                    placeholder="Ingresa Algún Dato Para Buscar QR Fleje"
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
                    </div>
                </div>
            </div>

            <div className="p-1.5 w-full inline-block align-middle">

                <div className="overflow-hidden border rounded-lg">


                    <table className="table-auto overflow-x-scroll w-full block">
                        <thead className="bg-blue-500">

                            <tr>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} CODIGO QR FLEJE         {""} </th>
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
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""}                         {""} </th>
                            </tr>
                        </thead>

                        <tbody>
                            {records.filter((fleje) =>
                                Object.values(fleje).some(
                                    (value) =>
                                        value.toString().toLowerCase().indexOf(filter.toLowerCase()) > -1
                                )
                            )
                                .map(fleje => (
                                    <tr
                                        class="min-w-full divide-y divide-gray-900  "
                                        key={fleje.id}   >

                                        <td><QRCode value={`
                                                         ID                    : ${fleje.id}
                                                         FOLIO DE FLEJE        : ${fleje.cuerpofleje}
                                                         DESCRIPCIÓN           : ${fleje.descripcion}
                                                         TIPO                  : ${fleje.tipo}
                                                         CALIBRE               : ${fleje.calibre}
                                                         ESPESOR EN MILÍMETROS : ${fleje.espesormilimetros}
                                                         COLADA                : ${fleje.colada}
                                                         ALMACÉN               : ${fleje.almacen}
                                                         MODELO DE FLEJE       : ${fleje.tipofleje}
                                                         MEDIDA                : ${fleje.medida}
                                                         STOCK KILÓGRAMO       : ${fleje.pesoNeto}
                                                         PROVEEDOR             : ${fleje.proveedor}
                                                         FECHA LLEGADA         : ${fleje.fechallegada}
                                                         FECHA SALIDA          : ${fleje.fechasalida}
                                                         TIPO CAMBIÓ           : ${fleje.tipocambio}
                                                         CANTIDAD              : ${fleje.cantidad}
                                                         TUBOS POR CORTE       : ${fleje.tubosporcorte}
                                                         OBSERVACIÓN           : ${fleje.observacion}
                                            `}
                                            size={256}
                                            fgColor="#000000"
                                            bgColor="#ffffff"
                                            level="L"
                                        />
                                        </td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {fleje.id}                 </td>
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
                                            <a href='""' className='page-link'
                                                onClick={() => changeCPage(n)} > {n} </a>
                                        </th>
                                    </th>
                                ))
                            }

                            <th className='page-item'>
                                <a href='js#' className="page-link text-blue-600 border-gray-200 rounded focus:ring-blue-500"
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
