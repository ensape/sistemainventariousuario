import React from "react";
import camionbobina from "../assets/camionbobina.jpg";
import {useAuth} from "../context/authContext"

const Inicio = () => {

        const {credentials} = useAuth();
        console.log(credentials)

        return (
                <>
                        <div className="p-6">

                        </div>

                        <h4 className="text-center text-3xl text-blue-700text-3xl font-light mb-4">SISTEMA DE INVENTARIO PARA MATERIA PRIMA DE ALMACÉN METALÚRGICA  </h4>

                        <center><img alt="camion bobina"
                                width="900" height="100"
                                class="object-left md:object-top"
                                src={camionbobina} >
                        </img></center>


                </>
        );
}

export default Inicio;
