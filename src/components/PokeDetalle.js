import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unPokeDetalleAccion } from "../redux/pokeDucks";
const PokeDetalle = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(unPokeDetalleAccion());
    };
    fetchData();
  }, [dispatch]);

  const pokemon = useSelector((store) => store.pokemones.unPokemon);

  return pokemon ? (
    <div className="card mt-4 text-center">
      <div className="card-body">
        <img src={pokemon.foto} className="img-fluid" alt="Detalle pokemon" />
        <div className="card-title text-uppercase">{pokemon.nombre}</div>
        <p className="card-tet">
          Ancho: {pokemon.ancho} Alto: {pokemon.alto}
        </p>
      </div>
    </div>
  ) : null;
};

export default PokeDetalle;
