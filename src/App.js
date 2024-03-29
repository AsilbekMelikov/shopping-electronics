import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Model from "./Pages/Model";
import Carts from "./Pages/Carts";

function App() {
  return (
      <>
        <Header />
        <main className='content container-fluid'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/model/:id' element={<Model />} />
                <Route path='/orders' element={<Carts />}/>
            </Routes>
        </main>
        <Footer />
      </>
  )
}

export default App;
