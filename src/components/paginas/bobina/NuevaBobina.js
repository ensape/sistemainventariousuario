import React from "react";
import { useFormik } from "formik"; // formik se ocupara para validar los datos del furmulario
import * as Yup from 'yup'; // importacion para agregar bobina
import { useNavigate } from "react-router";


const Nuevabobina = () => {

    const navigate = useNavigate(); // Hook para redireccionar

    const formik = useFormik({ // const handleChange  : aceptacion y validacion de lectura de los datos en el formulario

        initialValues: { // cada input tendra un valor inicial
            
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
            // status                : '',
            observacion: ''
        },
        validationSchema: Yup.object({

            cuerpobobina: Yup.string().min(1, 'El folio de la bobina debe tener al menos 5 caracteres ')
                .required('El folio de bobina es obligatorio / En caso de no tener dato = sin folio'),

            descripcion: Yup.string().min(1, ' Agregar la descripcion de las medidas') // pendiente por hacer la autoacompltacion
                .required('La descripcion es obligatorio / En caso de no tener dato = sin descripcion'),

            tipo: Yup.string()
                .required('El tipo es obligatorio'),

            calibre: Yup.number().min(1, 'Agregar medida del calibre de la bobina ')
                .required('El calibre es obligatorio / En caso de no tener dato = 00.00'),

            anchoreal: Yup.number().min(1, 'Agregar las medidas de ancho real ')
                .required('El ancho real es obligatorio / En caso de no tener dato = 00.00'),

            espesorreal: Yup.number().min(1, ' Agregar las medidas de espesor real ')
                .required('El espesor real es obligatorio / En caso de no tener dato = 00.00'),

            pesoActual: Yup.number().min(1, ' Agregar el peso de kilogramos ')
                .required('El stock kilogramo es obligatorio / En caso de no tener dato = 000,000.00 '),

            proveedor: Yup.string().min(1, ' Agregar los datos del proveedor ')
                .required('El proveedor es obligatorio / En caso de no tener dato = sin proveedor'),

            fechaingreso: Yup.date().min(1, ' Seleccionar la fecha de ingreso ')
                .required('La fecha es obligatorio / En caso de no tener fecha de ingreso = 01/01/0001'),

            tipocambio: Yup.number().min(1, ' Ingresar el tipo de cambio ')
                .required('La el tipo cambio es obligatorio / En caso de no tener dato = 00.00'),

            colada: Yup.string().min(1, ' Agregar la colada ')
                .required('La colada es obligatorio / En caso de no tener dato = sin colada'),

            costodolarfactura: Yup.string().min(1, ' Agregar el costo dolar factura ')
                .required('La ostodolarfactura es obligatorio / En caso de no tener dato = 00.00'),

            costodolarprorroteado: Yup.string().min(1, ' Agregar el costo dolar prorroteado ')
                .required('La costodolar prorroteado es obligatorio / En caso de no tener dato = 00.00'),

            costomn: Yup.string().min(1, ' Agregar el costo mn ')
                .required('La costo mn es obligatorio / En caso de no tener dato = 00.00'),

            pesoNeto: Yup.string().min(1, ' Agregar el peso fisico kilogramo ')
                .required('La pesofisicokilogramo es obligatorio / En caso de no tener dato = 00.00'),

            sobrante: Yup.string().min(1, ' Agregar el sobrante de bobina ')
                .required('La sobrante es obligatorio / En caso de no tener dato = 00.00'),
            // status                   : Yup.boolean()
            //                 .required( 'el estado es obligatorio' ),

            observacion: Yup.string()
                .min(5, ' Agregar alguna observacion que se tenga al ingreso de la bobina')
                .required('La observacion es obligatorio / En caso de no tener dato = sin observaciones '),
        }),

        //const handleSubmit      
        onSubmit: bobina => { // pasar automaticamnete los datos del formulario
            console.log(bobina);
            try {

                // if para decir que ya existe la bobina 
                bobina.existencia = true;

                const solicitudInit = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bobina)
                }
                fetch("http://localhost:3001/bobina/register", solicitudInit)
                    .then(res => res.text())
                    .then(res => console.log(res))

                navigate('/list-bobina');
            } catch (error) {
                console.log(error);
                console.log('creo que ya existe la bobina', error)
            }
        },
    });


    return (

        <>
            <div class="font-sans">
                <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
                    <div class="relative w-full rounded-3xl px-5 py-20 bg-gray-300 shadow-md">

                        <label> Rellenar los siguientes campos para registrar nueva bobina </label>

                        <form
                            onSubmit={formik.handleSubmit}>

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* cuerpobobina */}
                            <div className="mb-4" class="text-uppercase">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cuerpobobina"> CUERPO DE BOBINA </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="cuerpobobina"
                                    type="text"
                                    placeholder="Ingresar Folio De Bobina"

                                    value={formik.values.cuerpobobina}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                </input>
                            </div>
                            {formik.touched.cuerpobobina && formik.errors.cuerpobobina ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.cuerpobobina} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* descripcion */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">DESCRIPCION </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="descripcion"
                                    type="text"
                                    placeholder="BOBINA A.INOX Medida MM X Medida MM T-"
                                    autoComplete="descripcion"

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

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* tipo */}
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

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* calibre */}
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

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* anchoreal */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="anchoreal">ANCHO REAL</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="anchoreal"
                                    type="number"
                                    step="any"
                                    placeholder="00.00MM"
                                    min="0"

                                    value={formik.values.anchoreal}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                </input>
                            </div>
                            {formik.touched.anchoreal && formik.errors.anchoreal ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.anchoreal} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* espesorreal */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="espesorreal">ESPESOR REAL</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="espesorreal"
                                    type="number"
                                    step="any"
                                    placeholder="00.00MM"
                                    min="0"

                                    value={formik.values.espesorreal}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                </input>
                            </div>
                            {formik.touched.espesorreal && formik.errors.espesorreal ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.espesorreal} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* stockkilogramo */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pesoActual">STOCK KILOGRAMOS</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="pesoActual"
                                    type="number"
                                    step="any"
                                    placeholder="0,000.00 KG"
                                    min="0"

                                    value={formik.values.pesoActual}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                </input>
                            </div>
                            {formik.touched.pesoActual && formik.errors.pesoActual ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.pesoActual} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* proveedor */}
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

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* fechaingreso */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaingreso">FECHA DE INGRESO</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="fechaingreso"
                                    type="date"
                                    placeholder="DD/MM/AA"

                                    value={formik.values.fechaingreso}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                </input>
                            </div>
                            {formik.touched.fechaingreso && formik.errors.fechaingreso ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.fechaingreso} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* tipocambio */}
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

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* colada */}

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="colada">COLADA</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="colada"
                                    type="text"
                                    placeholder="Ingresar colada de bobina"

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

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* costodolarfactura */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="costodolarfactura">COSTO DOLAR POR FACTURA</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="costodolarfactura"
                                    type="number"
                                    placeholder="Ingresar costo $dolar factura de bobina"

                                    value={formik.values.costodolarfactura}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                </input>
                            </div>
                            {formik.touched.costodolarfactura && formik.errors.costodolarfactura ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.costodolarfactura} </p>
                                </div>
                            ) : null}
                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* costodolarprorroteado */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="costodolarprorroteado">COSTO DOLAR PRORROTEADO</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="costodolarprorroteado"
                                    type="number"
                                    placeholder="Ingresar costo $dolar prorroteado de bobina"

                                    value={formik.values.costodolarprorroteado}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                </input>
                            </div>
                            {formik.touched.costodolarprorroteado && formik.errors.costodolarprorroteado ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.costodolarprorroteado} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* costomn */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="costomn">COSTO M.N.</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="costomn"
                                    type="number"
                                    placeholder="Ingresar costo $mn de bobina"

                                    value={formik.values.costomn}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                </input>
                            </div>
                            {formik.touched.colcostomnada && formik.errors.costomn ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.costomn} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* pesofisicokilogramo */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pesoNeto"> PESO FISICO KILOGRAMO</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="pesoNeto"
                                    type="number"
                                    step="any"
                                    placeholder="Ingresar pesofisico kilogramo de bobina"

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

                            {/* ////////////////////////////////////////////////////////////////// */}
                            {/* sobrante */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sobrante">SOBRANTE</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="sobrante"
                                    type="text"
                                    step="any"
                                    placeholder="Ingresar sobrante de bobina"

                                    value={formik.values.sobrante}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                </input>
                            </div>
                            {formik.touched.sobrante && formik.errors.sobrante ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                                    <p className="font-bold"> Se ocasiono un error </p>
                                    <p> {formik.errors.sobrante} </p>
                                </div>
                            ) : null}

                            {/* ////////////////////////////////////////////////////////////////////// */}
                            {/* status */}

                            {/* ////////////////////////////////////////////////////////////////////// */}
                            {/* observacion */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="observacion">OBSERVACION</label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="observacion"
                                    type="text"
                                    placeholder="Observacion sobre algun detalle observado en la Bobina"
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

                            {/* ////////////////////////////////////////////////////////////////////// */}
                            {/* button Agregar Bobina */}
                            <input
                                type="submit"
                                className="bg-gray-800 hover:bg-red-700 w-full mt-5 p-2 text-white uppercase font-bold"
                                value="Agregar Bobina"

                            >
                            </input>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Nuevabobina;
