import { type as findSuggestionsType } from '../actions/findSuggestions';
import items from '../../data/items';
const defaultState = [];

// Suggestions serán igual a un arreglo. Para probar. Código Temprano
/* const defaultState = [
    {
        id: 4,
        title: 'Rezando'
    }
]; */

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        /* Para que realice la búsqueda en base a la primera letra. */
        case findSuggestionsType: {
            const regex = new RegExp(`^${payload}`, 'i')
            return items.filter(n => regex.test(n.title));
        }
        default:
            return state;
    }
    
}

export default reducer;