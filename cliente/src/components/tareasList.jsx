import { useEffect, useState } from "react"     // importamos el useEffect de react para poder usarlo en el componente
import {getAllTareas} from "../api/tareas.api" // importamos la funcion getAllTareas de la api de tareas
import { TareasCard } from "./tareascard" // importamos el componente de tareasCard


export function TareasList() {
    const [tareas, setTareas] = useState([]); // creamos el estado de tareas y la funcion para setearlo

    useEffect(() => {
        // creamos la funcion asincrona y despues llamamos a la funcion q tiene la url q es loadTareas q se encuntra en el archivo tareas.api.js
        async function loadtareas() {
            const res = await getAllTareas();  // llamamos a la funcion getAllTareas q se encarga de hacer la peticion a la api
            setTareas(res.data) // seteamos el estado de tareas con la respuesta de la api q se encunetra en data y llamamos a data
        }
        loadtareas(); // llamamos a la funcion loadtareas
    }, []); 

    return (
        <div className="grid grid-cols-3 gap-3"> {/* creamos un div con un grid de 3 columnas y un gap de 4 */}
            {/* mapeamos el array de tareas y por cada tarea llamamos al componente de tareasCard y le pasamos la tarea como prop */}
            {tareas.map((tarea) => ( 
                <TareasCard key={tarea.id} tarea={tarea} /> 
            ))}
        </div>
    )
}