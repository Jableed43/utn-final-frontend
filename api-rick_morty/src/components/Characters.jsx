/* eslint-disable react/prop-types */
import "./characters.css";

function Characters({ characters }) {
  return (
    <div className="container-character">
      {characters.map((character, indice) => (
        <div key={indice} className="card-character">
          <div>
            <img src={character.image} alt="personaje" />
            <div>
              <h5>{character.name}</h5>
              <hr />
              <p>Especie: {character.species} </p>
              <p>Ubicacion: {character.location.name} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Characters;
