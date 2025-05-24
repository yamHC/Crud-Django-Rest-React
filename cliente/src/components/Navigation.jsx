import {Link} from 'react-router-dom';   // importamos el link de react-router-dom para poder navegar entre las paginas

export function Navigation() {
  return (
    <div className='flex justify-between py-3'>
        {/* barra de navegacion */}
        <Link to="/tareas">
            <h1 className='font-bold text-3x1 mb-4'>Tarea App</h1>
        </Link>

        <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
            <Link to="/tareas-creadas">Mandar al Fornulario</Link> {/* link para navegar a la pagina de tareas */}
        </button>   
    </div>
  );
}