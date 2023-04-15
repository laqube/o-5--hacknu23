import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home} from './pages/home';
import { Registration} from './pages/registration';
import { Login} from './pages/login';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}/>
        <Route path="/Reg" element={<Registration />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
