import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import { Route, Routes } from 'react-router';
import ShirtPage from './Pages/ShirtPage';
import Singlepage from './Pages/Singlepage';
import Cart from './Pages/Cart';
import Pants from './Pages/Pants';
import Shoes from './Pages/Shoes';
import Kitchen from './Pages/KItchen';
import MensPage from './Pages/MensPage';
import WomenPage from './Pages/Women';
import Checkout from './Pages/Checkout';
import End from './Pages/End';

function App() {
  const price = 124;
  return (
    <div >
     <Navbar />
<Routes>
<Route path='/' element={<Homepage />}></Route>
<Route path='/Shirts' element={<ShirtPage />}></Route>
<Route path='/SinglePage' element={<Singlepage />}></Route>
<Route path='/Cart' element={<Cart />}></Route>
<Route path='/Pants' element={<Pants />}></Route>
<Route path='/Shoes' element={<Shoes />}></Route>
<Route path='/Kitchen' element={<Kitchen />}></Route>
<Route path='/Men' element={<MensPage />}></Route>
<Route path='/Women' element={<WomenPage />}></Route>
<Route path='/Checkout' element={<Checkout price= {price} />}></Route>
<Route path='/End' element={<End />} ></Route>
</Routes>
    </div>
  );
}

export default App;
