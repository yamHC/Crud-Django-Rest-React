/* 
  Este es el archivo principal de la Aplicacion llmada App.jsx
  - aca importamos las rutas y los componentes necesarios para la aplicacion -
*/
import { BrowserRouter,  Routes, Route, Navigate } from 'react-router-dom'  // est codigo de import y browserRouter es para el enrutador de react
import { TareasPage } from './pages/tareasPage' // importamos la pagina de tareas q esta en dentro de la carpeta pages
import { TareasFormPage } from './pages/tareasFormPage' // importamos la pagina de tareas q esta en dentro de la carpeta pages
import { Navigation } from './components/Navigation' // importamos la barra de navegacion
import { Toaster } from 'react-hot-toast' // importamos el toaster para las notificaciones

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation /> {/* barra de navegacion */}
        <Routes>
          <Route path="/" element={< Navigate to="/tareas" />} /> {/* redireccionamos a la pagina de tareas */}
          <Route path="/tareas" element={< TareasPage />} />       {/* ruta de tareas */}
          <Route path="/tareas-creadas" element={< TareasFormPage />} />  {/* ruta de tareas form */}
          <Route path="/tareas/:id" element={< TareasFormPage />} />  {/* ruta de tareas form */}
        </Routes>
        <Toaster/>

      </div>
    </BrowserRouter>
  )
}

export default App