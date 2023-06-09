import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actions/types";


const initialState = {
    myFavorites: [],
    myFavoritesOrigin: [] // Solo lo modifican el ADD y el REMOVE
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavoritesOrigin, payload],
                myFavoritesOrigin: [...state.myFavoritesOrigin, payload]
            };
        case REMOVE_FAV:
            let newFavorites = state.myFavoritesOrigin.filter((p) => 
                p.id !== payload,
            );
            return {
                ...state,
                myFavorites: newFavorites,
                myFavoritesOrigin: newFavorites

            };
        case FILTER:
            let newFilter = state.myFavoritesOrigin.filter((p) => 
                p.gender === payload);
            return{
                ...state,
                myFavorites: newFilter,
            };
        case ORDER:
            const newOrder = state.myFavoritesOrigin.sort((a,b) => {
                if(a.id>b.id){
                    return 'Ascendente' === payload ? 1 : -1 // si el payload es ascendente entonces vamos a ordenar en orden 1, si no -1
                } else {
                    return 'Descendente' === payload ? 1 : -1
                }
            });
        case RESET:
            return{
                ...state,
                myFavorites: [...state.myFavoritesOrigin],
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