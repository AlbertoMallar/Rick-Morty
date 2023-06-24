import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


export default function Detail(){

    const [character, setCharacter] = useState({})

    const {id} = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
            <h1>Name: {character.name}</h1>
            <h2>Status: {character.status}</h2>
            <h2>Species: {character.species}</h2>
            <h2>Gender: {character.gender}</h2>
            <h2>Origin: {character.origin?.name}</h2> {/* Usamos el operador de encadenamiento opcional para verificar si existe la propiedad 'origin' */}
            <img src={character.image} alt={character.name} />
        </div>
    )
}
    