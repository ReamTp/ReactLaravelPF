import { ToastContainer } from 'react-toastify';
import './App.css';
import AppRouter from './src/routes/AppRouter';

function App() {
  return (
    <>
      <AppRouter/>
      <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar // Ocultar barra de progreso
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
