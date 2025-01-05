import {Container} from '@mui/material'
import './App.css';
import Navbar from './components/navbar/navbar.js';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.js';
import Client from './pages/client.js';
import Truck from './pages/truck.js';
import Product from './pages/product.js';
import DeliveryRoutes from './pages/routes.js';
import Order from './pages/order.js';

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{
        mt: 5
        }}>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/product' element={ <Product/>}/>
          <Route path='/client' element={ <Client/>}/>
          <Route path='/route' element={ <DeliveryRoutes/>}/>
          <Route path='/truck' element={ <Truck/>}/>
          <Route path='/order' element={ <Order/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
