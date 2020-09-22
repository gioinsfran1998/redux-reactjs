/* En nuestra tienda configuraremos todos los estados para que sean disponibles globlalmente dentro de nuestra app */

/* 
    Vamos a necesitar:
        - createStore =
        - combineReducers =
        - compose = 
        - applyMiddleware = es para trabajar con las promesas.
*/

import { combineReducers, compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import pokeReducer from "./pokeDucks";
import usuarioReducer, { leerUsuarioActivoAccion } from "./usuarioDucks";

const rootReducer = combineReducers({
  pokemones: pokeReducer,
  usuario: usuarioReducer,
});

/* Extension de Redux para visualizar el store en el navegador */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  leerUsuarioActivoAccion()(store.dispatch);
  return store;
}
