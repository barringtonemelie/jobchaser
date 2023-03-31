import * as React from 'react'
import { Home, ApplicationFormOne, ApplicationFormResult } from './components/index.jsx';
import { Routes, Route } from "react-router-dom"



function App() {

  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-page-one" element={<ApplicationFormOne />} />
        <Route path="/apply-page-res" element={<ApplicationFormResult />} />
      </Routes>
    </div>
  );
}

export default App