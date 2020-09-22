import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  obtenerPokemonesAction,
  siguientePokemonAccion,
  anteriorPokemonAccion,
  unPokeDetalleAccion,
} from "../redux/pokeDucks";
import PokeDetalle from "./PokeDetalle";

const Pokemones = () => {
  const dispatch = useDispatch();
  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);

  useEffect(() => {
    const fetchData = () => {
      dispatch(obtenerPokemonesAction());
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="row mt-4">
      <div className="col-md-6">
        <h3>Lista de pokemones</h3>
        <ul className="list-group mt-4">
          {pokemones.map((item) => (
            <li key={item.name} className="list-group-item text-uppercase">
              {item.name}
              <button
                className="btn btn-dark btn-sm float-right"
                onClick={() => dispatch(unPokeDetalleAccion(item.url))}
              >
                Info
              </button>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-between mt-4">
          {pokemones.length === 0 && (
            <button
              onClick={() => dispatch(obtenerPokemonesAction())}
              className="btn btn-dark"
            >
              Get Pokemones
            </button>
          )}
          {next && (
            <button
              onClick={() => dispatch(siguientePokemonAccion())}
              className="btn btn-dark"
            >
              Siguiente
            </button>
          )}
          {previous && (
            <button
              onClick={() => dispatch(anteriorPokemonAccion())}
              className="btn btn-dark"
            >
              Anterior
            </button>
          )}
        </div>
      </div>
      <div className="col-md-6">
        <h3>Detalle Pokemon</h3>
        <PokeDetalle />
      </div>
    </div>
  );
};

export default Pokemones;
