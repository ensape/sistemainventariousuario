import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useParams } from "react-router-dom";

const Nuevocortefleje = () => {

    const { id } = useParams()

    const formik = useFormik({

        initialValues: {
            cuerpofleje: '',
            descripcion: '',
            tipo: '',
            calibre: '',
            pesoNeto: '',
            colada: '',
            almacen: '',
            tipofleje: '',
            medida: '',
            stockkilogramo: '',
            proveedor: '',
            fechallegada: '',
            fechasalida: '',
            tipocambio: '',
            // pesokilogramofisico: '',
            cantidad: '',
            tubosporcorte: '',
            observacion: '',
        },
        validationSchema: Yup.object({

            cuerpofleje: Yup.string().min(2, 'El folio de fleje debe tener al menos 5 caracteres ')
                .required('El folio de fleje es obligatorio / En caso de no tener dato = sin folio '),

            descripcion: Yup.string().min(5, ' Agregar las descripcion medidas')
            .required('La descripcion es obligatorio / En caso de no tener dato = sin descripcion'),

            tipo: Yup.string()
                .required('El tipo es obligatorio'), // Boton Select

            calibre: Yup.number().min(1, 'Agregar medida del calibre de la bobina ')
                .required('El calibre es obligatorio / En caso de no tener dato = 00.00'),

            espesormilimetros: Yup.number().min(1, ' Agregar las medidas del espesor ')
                .required('El espesor en milimetros es obligatorio / En caso de no tener dato = 00.00'),

            colada: Yup.string().min(1, ' Agregar la colada ')
                .required('La colada es obligatorio / En caso de no tener dato = sin colada'),

            almacen: Yup.string()
                .required('Seleccione almacen es obligatorio'),

            tipofleje: Yup.string() // boton select ( REDONDO, SOBRANTE, CORTAR )
                .required('Seleccione el tipo de fleje es obligatorio / En caso de no tener dato = x? tipo fleje '),

            medida: Yup.number().min(2, ' Agregar las medidas en milimetros de fleje ')
                .required('El espesor real es obligatorio / En caso de no tener dato = 00.00 '),

            pesoNeto: Yup.number().min(2, ' Agregar los kilogramos ')//
                .required('El stock kilogramo es obligatorio / En caso de no tener dato = 00.00'),

            proveedor: Yup.string().min(2, ' Agregar los datos del provedor ')
                .required('El proveedor es obligatorio / En caso de no tener dato = sin proveedor '), // boton select

            fechallegada: Yup.date().min(2, ' Seleccionar la fecha de ingreso ')
                .required('La fecha de ingreso es obligatorio / En caso de no tener fecha llegada =  01/01/0001'),

            fechasalida: Yup.date().min(2, ' Seleccionar la fecha de salida ')
            .required('La fecha de ingreso es obligatorio / En caso de no tener fecha salida =  01/01/0001'),

            tipocambio: Yup.number().min(2, ' Ingresar el tipo de cambio ') //
                .required('El tipo cambio es obligatorio / En caso de no tener dato = 00.00'),

            // pesokilogramofisico: Yup.number().min(2, ' Agregar el peso kilogramo en fisico ')
            //     .required('El peso kilogramo en fisico / En caso de no tener dato = 00.00'),

            cantidad: Yup.number().min(2, ' Agregar la cantidad de fleje ')
                .required('La cantidad de fleje es obligatorio / En caso de no tener dato = 00.00'),

            tubosporcorte: Yup.number().min(2, ' Ingresar cantidad de tubos por corte ')
                .required('La cantidad de tubos por corte es obligatorio / En caso de no tener dato = 00.00'),

                observacion: Yup.string()
                .min(5, ' Agregar alguna observacion que se tenga al ingreso de la bobina')
                .required('La observacion es obligatorio / En caso de no tener dato = sin observaciones '),
        }),

        onSubmit: fleje => {
            console.log(fleje);

            try {
                fleje.existencia = true;

                const solicitudInit = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(fleje)
                }
                //fetch("http://localhost:3001/fleje/register/:idbobina", solicitudInit)
                fetch(`http://localhost:3001/fleje/register/${id}`, solicitudInit)

                    .then(res => res.text())
                    .then(res => console.log(res))


            } catch (error) {
                console.log(error);
                console.log('creo que ya existe el fleje', error)
            }
        },
    });


    return (

        <>
            <h1 className="text-3xl font-light mb-4"> Ingresar Datos Para Registar El Corte Del Fleje </h1>

            <div class="font-sans">
                <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
                    <div class="relative w-full rounded-3xl px-5 py-20 bg-gray-800 shadow-md">

                        <form
                            onSubmit={formik.handleSubmit}>

                            {/* ////////////////////////////////////////////////// cuerpofleje */}

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="cuerpofleje"> CUERPO DE FLEJE </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="cuerpofleje"
                                    type="text"
                                    placeholder="Ingresar Folio de Fleje"
                                    value={formik.values.cuerpofleje}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                </input>
                            </div>
                            {formik.touched.cuerpofleje && formik.errors.cuerpofleje ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.cuerpofleje} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// descripcion */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">DESCRIPCION </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="descripcion"
                                    type="text"
                                    onkeyup="mayusculas(this);"
                                    placeholder="FLEJE A.INOX Medida MM X Medida MM T-"

                                    value={formik.values.descripcion}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                </input>
                            </div>
                            {formik.touched.descripcion && formik.errors.descripcion ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.descripcion} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// tipo */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipo"> TIPO </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="tipo"
                                    value={formik.values.tipo}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                    <option value=""> -- Selecione Tipo -- </option>
                                    <option value= "T-201      ">  T-201       </option>
                                    <option value= "T-201 2B   ">  T-201 2B    </option>
                                    <option value= "T-204CU 2B ">  T-204CU 2B  </option>
                                    <option value= "T-301      ">  T-301       </option>
                                    <option value= "T-304      ">  T-304       </option>
                                    <option value= "T-304 2B   ">  T-304 2B    </option>
                                    <option value= "T-304DL    ">  T-304DL     </option>
                                    <option value= "T-304L     ">  T-304L      </option>
                                    <option value= "T-304L 2B  ">  T-304L 2B   </option>
                                    <option value= "T-316      ">  T-316       </option>
                                    <option value= "T-316 2B   ">  T-316 2B    </option>
                                    <option value= "T-316 L    ">  T-316 L     </option>
                                    <option value= "T-316L 2B  ">  T-316L 2B   </option>
                                    <option value= "T-409      ">  T-409       </option>
                                    <option value= "T-409      ">  T-409       </option>
                                    <option value= "T-409 2B   ">  T-409 2B    </option>
                                    <option value= "T-430      ">  T-430       </option>
                                    <option value= "T-430 2B   ">  T-430 2B    </option>
                                    <option value= "T-439      ">  T-439       </option>
                                    <option value= "T-439 2B   ">  T-439 2B    </option>
                                    <option value= "T-439 2D   ">  T-439 2D    </option>
                                    <option value= "T-444      ">  T-444       </option>
                                    <option value= "T-4828 2B  ">  T-4828 2B   </option>
                                    <option value= "T-4828 2D  ">  T-4828 2D   </option>


                                </select>
                            </div>
                            {formik.touched.tipo && formik.errors.tipo ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.tipo} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// calibre */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="calibre">CALIBRE</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="calibre"
                                    type="number"
                                    step="any"
                                    placeholder="c-00(00.00)"
                                    min="0"

                                    value={formik.values.calibre}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                </input>
                            </div>
                            {formik.touched.calibre && formik.errors.calibre ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.calibre} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// espesormilimetros */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="espesormilimetros">ESPESOR EN MILIMETROS</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="espesormilimetros"
                                    type="number"
                                    step="any"
                                    placeholder="00.00.00MM"
                                    min="0"

                                    value={formik.values.espesormilimetros}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                </input>
                            </div>
                            {formik.touched.espesormilimetros && formik.errors.espesormilimetros ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.espesormilimetros} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// colada */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="colada">COLADA</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="colada"
                                    type="text"
                                    placeholder="Ingresar colada de fleje"

                                    value={formik.values.colada}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                </input>
                            </div>

                            {formik.touched.colada && formik.errors.colada ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.colada} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// almacen */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="almacen">ALMACEN</label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="almacen"
                                    value={formik.values.almacen}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value=""> -- Selecione Almacen -- </option>
                                    <option value= "13      ">  13     </option>
                                </select>

                            </div>
                            {formik.touched.almacen && formik.errors.almacen ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.almacen} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// tipofleje */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipofleje"> TIPO DE FLEJE </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="tipofleje"

                                    value={formik.values.tipofleje}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                    <option value=""> -- Selecione Tipo de Fleje -- </option>
                                    <option value="REDONDO" > REDONDO  </option>
                                    <option value="SOBRANTE"> SOBRANTE </option>
                                    <option value="CORTAR"  > CORTAR   </option>
                                    <option value="X? TIPO FLEJE"  > X? TIPO FLEJE   </option>
                                </select>
                            </div>
                            {formik.touched.tipofleje && formik.errors.tipofleje ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.tipofleje} </p>
                                </div>
                            ) : null}


                            {/* ////////////////////////////////////////////////// medida */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medida"> MEDIDA </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="medida"
                                    type="number"
                                    step="any"
                                    placeholder="00.00.00MM"
                                    min="0"

                                    value={formik.values.medida}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                </input>
                            </div>
                            {formik.touched.medida && formik.errors.medida ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.medida} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// stockkilogramo */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pesoNeto">STOCK KILOGRAMOS</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="pesoNeto"
                                    type="number"
                                    step="any"
                                    placeholder="0,000.00"
                                    min="0"

                                    value={formik.values.pesoNeto}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                </input>
                            </div>
                            {formik.touched.pesoNeto && formik.errors.pesoNeto ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.pesoNeto} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// proveedor */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proveedor"> PROVEEDOR </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="proveedor"
                                    type = "text"
                                    value={formik.values.proveedor}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                </input>
                            </div>
                            {formik.touched.proveedor && formik.errors.proveedor ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.proveedor} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// fechallegada */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechallegada">FECHA LLEGADA</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="fechallegada"
                                    type="date"
                                    placeholder="DD/MM/AA"

                                    value={formik.values.fechallegada}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                </input>
                            </div>
                            {formik.touched.fechallegada && formik.errors.fechallegada ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.fechallegada} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// fechasalida */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechasalida">FECHA DE SALIDA</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="fechasalida"
                                    type="date"
                                    placeholder="DD/MM/AA"

                                    value={formik.values.fechasalida}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                </input>
                            </div>
                            {formik.touched.fechasalida && formik.errors.fechasalida ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.fechasalida} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// tipocambio */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipocambio">T.C.</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="tipocambio"
                                    type="number"
                                    step="any"
                                    placeholder="00.00"

                                    value={formik.values.tipocambio}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                </input>
                            </div>
                            {formik.touched.tipocambio && formik.errors.tipocambio ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.tipocambio} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// pesokilogramofisico */}
                            {/* <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pesokilogramofisico">STOCK KILOGRAMOS FISICO</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="pesokilogramofisico"
                                    type="number"
                                    step="any"
                                    placeholder="0,000.00"
                                    min="0"

                                    value={formik.values.pesokilogramofisico}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                </input>
                            </div>
                            {formik.touched.pesokilogramofisico && formik.errors.pesokilogramofisico ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.pesokilogramofisico} </p>
                                </div>
                            ) : null} */}

                            {/* ////////////////////////////////////////////////// cantidad */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cantidad"> CANTIDAD </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="cantidad"
                                    type="number"
                                    step="any"
                                    placeholder="0,000.00"
                                    min="0"

                                    value={formik.values.cantidad}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                </input>
                            </div>
                            {formik.touched.cantidad && formik.errors.cantidad ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.cantidad} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// tubosporcorte */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tubosporcorte"> TUBOS POR CORTE </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="tubosporcorte"
                                    type="number"
                                    step="any"
                                    placeholder="0,000.00"
                                    min="0"

                                    value={formik.values.tubosporcorte}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                </input>
                            </div>
                            {formik.touched.tubosporcorte && formik.errors.tubosporcorte ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.tubosporcorte} </p>
                                </div>
                            ) : null}


                            {/* ////////////////////////////////////////////////// observacion */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="observacion">OBSERVACION</label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="observacion"
                                    type="text"
                                    placeholder="Observacion acerca del ingreso de una nueva bobina"
                                    value={formik.values.observacion}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                </textarea>
                            </div>
                            {formik.touched.observacion && formik.errors.observacion ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.observacion} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////// button Agregar Corte de Fleje */}

                            <input
                                type="submit"
                                className="bg-gray-800 hover:bg-red-700 w-full mt-5 p-2 text-white uppercase font-bold"
                                value="Agregar Corte de Fleje"
                            >
                            </input>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nuevocortefleje;
