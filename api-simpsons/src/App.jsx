import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://apisimpsons.fly.dev/api/personajes";

  function fetchCharacters(url) {
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(datos => {
        setCharacters(datos.docs);
        setInfo({
          hasPrevPage: datos.hasPrevPage,
          hasNextPage: datos.hasNextPage,
          prevPage: datos.prevPage,
          nextPage: datos.nextPage,
        });
      })
      .catch(error => console.log(error));
  }
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  const next = () => {
    fetchCharacters(`${initialUrl}?page=${info.nextPage}`);
  };

  const prev = () => {
    fetchCharacters(`${initialUrl}?page=${info.prevPage}`);
  };

  return (
    <>
      {info.hasPrevPage ? <button onClick={prev}>prev</button> : <></>}
      {info.hasNextPage ? <button onClick={next}>next</button> : <></>}
      <div>
        {characters.map((character, indice) => (
          <div key={indice}>
            <p> {character.Nombre} </p>
            <img style={{ width: "200px" }} src={character.Imagen} />
            <p> Ocupacion: {character.Ocupacion}</p>
            <p> Genero: {character.Genero}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default App;
