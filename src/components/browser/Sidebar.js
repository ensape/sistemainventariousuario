import React from 'react';
import cipsasidebar from "../assets/Logo192.png";
import { BsDatabaseFill } from "react-icons/bs";
import { FaQrcode } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";


const Sidebar = () => {
    
    return (
        <div className="md:w-2/5 xl:w-1/5 bg-red-900">
        <div className="p-6">      
         
                 <div>
                    <img src = {cipsasidebar}  alt = 'imagen de la empresa metalurgica' ></img>
                </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">

                            <li className="rounded-sm">
                                <a href='js'
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span className="text-gray-100">< a href="/">INICIO</a></span>   
                                </a>
                            </li>
                             
                            {/* <li className="rounded-sm">
                                <a
                                    href=","
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >   
                                    </svg>
                                    <span className="text-gray-100 float:left;"><FaSlackHash/></span>
                                    <span className="text-gray-100">< a href="/menu"> Registrar </a> </span>
                                     </a>
                            </li> */}

                            <li className="rounded-sm">
                                <a
                                    href=","
                                    className="flex items-left p-2 space-x-3 rounded-md"
                                >
                                    <span className="text-gray-100"><a href=","> CAMPO DE BOBINAS</a></span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href=","
                                    className="flex items-left p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                    </svg>
                                    <span className="text-gray-100 float:left;"><FaTasks/></span> 
                                     <span className="text-gray-100"> 
                                     <a className="p-1 text-gray-450 block hover:bg-yellow-200 hover:text-gray-900" activeclassname="text-yellow-500" exact="true"
                                     href="/list-bobina"> Lista de Bobinas </a> </span>
                                </a>
                            </li>

                            <li className="rounded-sm">
                                <a
                                    href=","
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                    </svg>
                                    <span className="text-gray-100 float:left;"><FaQrcode/></span> 
                                    <span className="text-gray-100">
                                    <a className="p-1 text-gray-450 block  hover:bg-yellow-200 hover:text-gray-900" activeclassname="text-yellow-500" exact="true"

                                         href="/generar-qrbobina"> Codigos QR Bobinas</a></span>
                                </a>
                            </li>

                            <li className="rounded-sm">
                                <a
                                    href="js#"
                                    className="flex items-left p-2 space-x-3 rounded-md"
                                >
                                    <span className="text-gray-100"><a href="js#"> CAMPO DE FLEJES</a></span>
                                </a>
                            </li>

                            <li className="rounded-sm">
                                <a
                                    href="js#"
                                    className="flex items-left p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                    </svg>
                                    <span className="text-gray-100 float:left;"><BsDatabaseFill/></span>
                                     <span className="text-gray-100">
                                     <a className="p-1 text-gray-450 block hover:bg-green-200 hover:text-gray-900" activeclassname="text-yellow-500" exact="true"
                                        href="/list-fleje"> Lista de Flejes</a></span>
                                </a>
                            </li>
                            
                            <li className="rounded-sm">
                                <a
                                    href="js#"
                                    className="flex items-left p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                    </svg>
                                    <span className="text-gray-100 float:left;"><FaQrcode/></span> 
                                    <span className="text-gray-100">
                                    <a className="p-1 text-gray-450 block hover:bg-green-200 hover:text-gray-900" activeclassname="text-yellow-500" exact="true"
                                         href="/generar-qrfleje"> Codigos QR Flejes</a></span>                                
                              </a>
                            </li>                    
                        </ul>
                    </div>
                  
                </div>

            </div>
            
    );
  
}
 export default Sidebar;


