/* Aca en la carpeta api creamos el archivo tareas.api.js que sera un codigo para conectarnos a la api de django y obtener las tareas */

import axios from 'axios';      // Importamos axios para hacer peticiones HTTP

const tareasApi = axios.create({
   baseURL: 'http://localhost:8000/tareas/api/v1/tareas/', // Definimos la URL base de la API
});

export const getAllTareas = async () => {
   return tareasApi.get('/') // Hacemos una peticion GET a la API PARA LISTAR LAS TAREAS
}

export const getTarea = async (id) => {
   return tareasApi.get(`/${id}/`) // Hacemos una peticion GET a la API PARA OBTENER UNA TAREA POR ID
}

export const createTarea = async (tarea) => {
   return tareasApi.post('/', tarea) // Hacemos una peticion POST a la API PARA CREAR UNA NUEVA TAREA
}

export const deleteTarea = async (id) => {
   return tareasApi.delete(`/${id}/`) // Hacemos una peticion DELETE a la API PARA ELIMINAR UNA TAREA
}

export const updateTarea = async (id, tarea) => {
   return tareasApi.put(`/${id}/`, tarea) // Hacemos una peticion PUT a la API PARA ACTUALIZAR UNA TAREA
}  