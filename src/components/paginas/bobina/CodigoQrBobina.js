import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const CodigoQrbobina = ({ bobina, bobinas, setListUpdated }) => {

    const [filter, setFilter] = useState(""); // constante para el filtrado de datos 
    console.log(filter)

    //-------- constantes para el paginador de la tabla
    const [currentPage, setCurrentPage] = useState(1)
    const recordPerPage = 2;
    const lasIndex = currentPage * recordPerPage;
    const firsIndex = lasIndex - recordPerPage;
    const records = bobinas.slice(firsIndex, lasIndex);
    const npage = Math.ceil(bobinas.length / recordPerPage)
    const numbers = [...Array(npage + 1).keys()]

    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="flex justify-between py-3 pl-2">
                        <div className="relative max-w-xs">

                            <label for="table-search" class="sr-only">Search</label>

                            <input
                                onChange={e => setFilter(e.target.value)}
                                value={filter}
                                type="text"
                                name="hs-table-search"
                                id="hs-table-search"
                                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                placeholder="Ingresa Algún Dato Para Buscar QR Bobina" />

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
                        <thead className="bg-green-500">
                            <tr>

                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} CODIGO QR               {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} ID                      {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} folio de bobina         {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} DESCRIPCIÓN             {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} tipo                    {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} calibre                 {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} ancho real              {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} espesor real            {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} stock KILÓGRAMO         {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} proveedor               {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} fecha ingreso           {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} TIPO CAMBIÓ             {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} colada                  {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} costo dolar factura     {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} costo dolar prorroteado {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} costo m.n.              {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} peso FÍSICO KILÓGRAMO   {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} sobrante                {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""} observacion             {""} </th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left italic text-gray-900 uppercase "> {""}                         {""} </th>
                            </tr>
                        </thead>

                        <tbody>
                            {records.filter((bobina) =>
                                Object.values(bobina).some(
                                    (value) =>
                                        value.toString().toLowerCase().indexOf(filter.toLowerCase()) > -1
                                )
                            )
                                .map(bobina => (
                                    <tr
                                        class="min-w-full divide-y divide-gray-900  "
                                        key={bobina.id}   >

                                        <td><QRCode value={`
                                                         ID                      : ${bobina.id}
                                                         FOLIO DE BOBINA         : ${bobina.cuerpobobina}
                                                         DESCRIPCIÓN             : ${bobina.descripcion}
                                                         TIPO                    : ${bobina.tipo}
                                                         CALIBRE                 : ${bobina.calibre}
                                                         ANCHO REAL              : ${bobina.anchoreal}
                                                         ESPESOR REAL            : ${bobina.espesorreal}
                                                         STOCK KILOGRAMO         : ${bobina.pesoActual}
                                                         PROVEEDOR               : ${bobina.proveedor}
                                                         FECHA INGRESO           : ${bobina.fechaingreso}
                                                         TIPO CAMBIÓ             : ${bobina.tipocambio}
                                                         COLADA                  : ${bobina.colada}
                                                         COSTO DÓLAR FACTURA     : ${bobina.costodolarfactura}
                                                         COSTO DÓLAR PRORRATEADO : ${bobina.costodolarprorroteado}
                                                         COSTO M.N.              : ${bobina.costomn}
                                                         PESO FÍSICO KILOGRAMO   : ${bobina.pesoNeto}
                                                         SOBRANTE                : ${bobina.sobrante}
                                                         OBSERVACIÓN             : ${bobina.observacion}
                                            `}
                                            size={256}
                                            fgColor="#000000"
                                            bgColor="#ffffff"
                                            level="L"
                                        />
                                        </td>

                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.id}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.cuerpobobina}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.descripcion}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.tipo}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.calibre}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.anchoreal}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.espesorreal}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.pesoActual}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.proveedor}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.fechaingreso}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.tipocambio}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.colada}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.costodolarfactura}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.costodolarprorroteado}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.costomn}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.pesoNeto}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.sobrante}</td>
                                        <td class="px-6 py-4 text-sm font-mono  text-black-800 whitespace-nowrap">  {bobina.observacion}</td>

                                    </tr>
                                ))}
                        </tbody>
                    </table>

                    <nav>
                        <ul className='pagination'>
                            <th className='page-item page-link text-blue-600 border-gray-200 rounded focus:ring-blue-500'>
                                <a href="js#" className='page-link'
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
export default CodigoQrbobina;


















