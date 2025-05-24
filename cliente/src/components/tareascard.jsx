import { useNavigate } from "react-router-dom"; // importamos el hook useNavigate de react-router-dom


export function TareasCard({tarea}) { // creamos el componente de tareasCard


    const navigate = useNavigate(); // inicializamos el hook useNavigate

    return (
        // creamos el div q va a contener los campos de la tabla tarea
        <div 
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer" // le damos estilos al div
            onClick={() => {
                navigate(`/tareas/${tarea.id}`);
            }}
        >
            <h1 className="font-bold uppercase">{tarea.title}</h1>
            <p className="text-slate-400">{tarea.description}</p>
        </div>
    )
}