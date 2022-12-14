import React from "react";
import Card from "./cardUsuario"
import Tabla from "./TablaMovimientos"
import Carro from "./Carro"
import Productos from "./Productos"
import AdminProd from "./AdminProd";
import Detalles from "./Detalles";
import Logger from "./Loggin";
import Sign from "./CreateUsuario"
import Confirmar from "./Confirmar";
import Olvido from "./CambiarPassword";
import {AuthProvider} from "../context/AuthProvider.jsx";
import {ItemsProvider} from "../context/DataProvider.jsx";


import {Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

function Main(){
    

    return (
        
        
        <container class="Central_container">
            <Card></Card>
            <container class= "side-view-placer">
            
            
            <BrowserRouter>
            <ItemsProvider>
           <AuthProvider>
            <Routes>
                
                    <Route path="/sign_up/home/" element={<Sign/>}/>
                    <Route path="/sign_up/home/Confirmation/:id" element={<Confirmar/>}></Route >
                    <Route path="/Admin/home/Productos" element={<AdminProd/>}></Route>
                    <Route path="/Admin/home/Detalles" element={<Detalles/>}></Route>
                    <Route path="/Admin/home/Ventas" element={<Tabla/>}></Route >
                    <Route path="/User/home/Carrito"   element={<Carro/>}></Route >
                    <Route path="/User/home/Productos" element={<Productos/>}></Route >
                    <Route path="/loggin/home/Contraseña" element={<Olvido/>}/>
                    <Route path="/loggin/home/" element={<Logger/>}/>
                        <Route path="*" element={ <Navigate to="/loggin/home/" replace={true} />} />
                
            </Routes>
            
            </AuthProvider>
            </ItemsProvider>
            </BrowserRouter>
           
                 </container>
           
        </container>
        
    );

   

}

export default Main;