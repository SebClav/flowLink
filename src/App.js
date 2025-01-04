import {Container} from '@mui/material'
import './App.css';
import Navbar from './components/navbar/navbar.js';

function App() {
  return (
    <Container sx={{
      mt: 5
      }}>

      <Navbar />
    </Container>
  );
}

export default App;
