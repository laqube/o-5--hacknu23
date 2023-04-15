import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing";
import { Login } from "./pages/login";

import { ClientPage } from "./pages/clientPage";
import { ClientApplication } from "./pages/clientApplication";
import { ClientRegistration } from "./pages/clientRegistration";

import { BrigadirNew } from "./pages/brigadirNew";
import { BrigadirProcess } from "./pages/brigadirProcess";
import { BrigadirSubmitted } from "./pages/brigadirSubmitted";

import { OperMenu } from "./pages/operPage";
import { OperRegistration } from "./pages/operRegistration";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<Login />}/>

        {/* client pages */}
        <Route path="/client" element={<ClientPage />}/>
        <Route path="/client/application" element={<ClientApplication />}/>
        <Route path="/client/registration" element={<ClientRegistration/>}/>

        {/* brigadir pages */}
        <Route path="/brigadir/new" element={<BrigadirNew/>}/>
        <Route path="/brigadir/process" element={<BrigadirProcess/>}/>
        <Route path="/brigadir/done" element={<BrigadirSubmitted/>}/>

        {/* oper pages */}
        <Route path="/oper" element={<OperMenu/>}/>
        <Route path="/oper/registration" element={<OperRegistration/>}/>
        
    </Routes>
    </BrowserRouter>
  );
}

export default App;
