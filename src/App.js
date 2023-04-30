import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import NotFound from "./Pages/NotFound";
import { useState } from "react";



function App() {
  const [countries, setCountries] = useState([])
  return (
    <div className="bg-gray-100 overflow-hidden min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home countries={countries} setCountries={setCountries} />} />
        <Route path="/name/:name" element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
