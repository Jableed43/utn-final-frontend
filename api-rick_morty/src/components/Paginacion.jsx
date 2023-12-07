/* eslint-disable react/prop-types */
import "./characters.css";
function Paginacion({ prev, next, retroceder, adelantar }) {
  const handleRetroceder = () => {
    retroceder();
  };

  const handleAdelantar = () => {
    adelantar();
  };

  return (
    <div>
      <nav>
        <ul className="nav-button-container">
          {prev ? (
            <li>
              <button onClick={handleRetroceder}>Pagina Previa</button>
            </li>
          ) : null}

          {next ? (
            <li>
              <button onClick={handleAdelantar}>Proxima Pagina</button>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
}

export default Paginacion;
