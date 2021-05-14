import { Router } from 'react-router';
import './App.css';
import AppRouter from './pages/Router.js';
import Footer from './pages/components/Footer.js'

function App() {

  return (
    <>
        <AppRouter />
        <Footer />
    </>
  );
}

export default App;
