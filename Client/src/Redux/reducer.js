import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actions/types";


let initialState = {
    myFavorites: [],
    myFavoritesOrigin: [] // Solo lo modifican el ADD y el REMOVE
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                myFavoritesOrigin: payload
            };


        case REMOVE_FAV:
            return { 
                ...state,
                myFavorites: payload,
                };


        case FILTER:
            return {
                ...state,
                myFavorites: state.myFavoritesOrigin.filter(
                    (ch) => ch.gender === payload
                ),
            };

        case ORDER:
            let ordenados = state.myFavoritesOrigin;
                if(payload === 'Ascendente') {
                    ordenados.sort((a, b) => (a.id - b.id))}
                if (payload === 'Descendente') {
                    ordenados.sort((a, b) => (b.id - a.id))
                }
            return {
                ...state,
                myFavorites: [...ordenados],
            }


        case RESET:
            return{
                ...state,
                myFavorites: state.myFavoritesOrigin,
            };
        default:
            return state
    }
}

export default rootReducer;


/*👩‍💻 EJERCICIO 2 | Reducer
Dirígete al archivo reducer y sigue estos pasos:

En tu estado inicial crea una nueva propiedad llamada allCharacters que debe ser igual a un arreglo vacío.

Modificaremos el caso ADD_FAV de la siguiente manera:

Dentro de la copia de tu estado global, reemplaza la propiedad myFavorites por allCharacters.
Cuando retornes tu estado, agrega la propiedad allCharacters que también sea igual a la copia en la que agregaste el nuevo personaje.

Crea un nuevo caso con el nombre "FILTER". Aquí debes crear una copia de tu estado global allCharacters. A partir de esta copia filtra todos aquellos personajes que tengan el mismo género que recibes por payload. Finalmente retorna una copia de tu estado, pero que la propiedad myFavorites sea igual a este filtrado.



*/