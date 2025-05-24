import { useEffect } from 'react';  // importamos el useEffect de react para poder usarlo en el componente
import {useForm} from 'react-hook-form' // importamos el useForm de react-hook-form para poder usarlo en el componente
import {createTarea, deleteTarea, updateTarea, getTarea} from '../api/tareas.api' // importamos el segundo archivo de la api de tareas
import { useNavigate, useParams } from 'react-router-dom' // importamos el useNavigate de react-router-dom para poder navegar entre las paginas
import { toast } from 'react-hot-toast' // importamos el toast de react-hot-toast para poder mostrar notificaciones

/* este export sirve para importar el componente App.jsx */
export function TareasFormPage() {
    const { 
        register, 
        handleSubmit, 
        formState : {errors},
        setValue
    } = useForm(); // usamos el useForm para manejar el formulario y la funcion handleSubmit para manejar el envio del formulario
    const navigate = useNavigate(); // usamos el useNavigate para navegar entre las paginas
    const params =  useParams()

    const onSubmit = handleSubmit( async (data) => { // usamos el handleSubmit para manejar el envio del formulario
        if (params.id) {
            await updateTarea(params.id, data) // si el id existe, actualizamos la tarea
            toast.success('Tarea actualizada',{
                position: 'bottom-right', // posicion de la notificacion
                duration: 2000, // duracion de la notificacion
                style: {
                    backgroundColor: '#101010', // color de fondo de la notificacion
                    color: '#fff' // color del texto de la notificacion
                }
            }) // mostramos una notificacion de tarea actualizada
        } else {
            await createTarea(data) // si el id no existe, creamos una nueva tarea
            toast.success('Tarea creada',{
                position: 'bottom-right', // posicion de la notificacion
                duration: 2000, // duracion de la notificacion
                style: {
                    backgroundColor: '#101010', // color de fondo de la notificacion
                    color: '#fff' // color del texto de la notificacion
                }
            }) // mostramos una notificacion de tarea creada
        }

        navigate('/tareas') // navegamos a la pagina de tareas
    });


    useEffect(() => {
    async function loadTarea() {
        if (params.id) {
            const res = await getTarea(params.id);
            setValue('title', res.data.title) // usamos el setValue para setear el valor del input title
            setValue('description', res.data.description) // usamos el setValue para setear el valor del textarea description
        }
        
    }
    loadTarea()
    }, [params.id]) // usamos el useEffect para cargar la tarea cuando el componente se monta

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit= {onSubmit}> {/* creamos el formulario y le pasamos la funcion onSubmit */}
                <input 
                    type="text" 
                    placeholder="title"
                    {...register("title", {required: true})} // usamos el register para registrar el input
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' // le damos estilos al input
                />
                {errors.title && <span>Este campo es requerido</span>} {/* mostramos el error si el campo title no es valido */}

                <textarea 
                    rows="3" 
                    placeholder="description"
                    {...register("description", {required: true})} // usamos el register para registrar el textarea
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' // le damos estilos al input

                />
                {errors.description && <span>Este campo es requerido</span>} {/* mostramos el error si el campo description no es valido */}

                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>CLick</button>
            </form>
            
            {params.id && 
            <div className='flex justify-end'>
                <button className='bg-red-500 p-3 rounded-lg w-48 mt-3' onClick={ async () => {
                const accepted = window.confirm('Estas seguro de eliminar la tarea?') // mostramos un mensaje de confirmacion
                if(accepted) {
                    await deleteTarea(params.id) // si el usuario acepta, eliminamos la tarea
                    toast.success('Tarea eliminada',{
                        position: 'bottom-right', // posicion de la notificacion
                        duration: 2000, // duracion de la notificacion
                        style: {
                            backgroundColor: '#101010', // color de fondo de la notificacion
                            color: '#fff' // color del texto de la notificacion
                        }
                    }) // mostramos una notificacion de tarea eliminada
                    navigate('/tareas') // navegamos a la pagina de tareas
                }
            }}>Delete</button>
            </div>   
            }

        </div>
    )
}