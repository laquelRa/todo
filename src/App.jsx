import { useState } from "react";

function App() {
  const [llistaTareas, setLlistaTareas] = useState([]);
  const [tarea, setTarea] = useState("");
  const [color, setColor] = useState("");
  const [mensaje, setMensaje] = useState("");

  function afegirTarea() {
    if (!color && !tarea.trim()) {
      setMensaje("Escribe en el campo de tarea y selecciona un color");
    } else if (!tarea.trim()) {
      setMensaje("Escribe en el campo de tarea");
    } else if (!color) {
      setMensaje("Selecciona un color");
    } else {
      setLlistaTareas([...llistaTareas, { tarea: tarea, color: color }]);
      setTarea("");
      setColor("");
      setMensaje("");
    }
  }

  function eliminaTarea(i) {
    const nuevasTareas = [...llistaTareas];
    nuevasTareas.splice(i, 1);
    setLlistaTareas(nuevasTareas);
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="m-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">
          TO DO LIST
        </h1>
        <div className="grid grid-cols-2 gap-4 mt-20">
          <div className="flex flex-col">
            <label className="mx-10 text-2xl font-bold">Tarea</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 mx-10 my-2 max-w-lg"
              id="camp-tarea"
              name="tarea"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
              type="text"
              placeholder="Nova tasca"
              required
            ></input>
            <div className="mx-10 my-2">
              <button
                className="me-2 my-1 inline-flex items-center px-4 py-1 text-sm font-medium text-blue-800 bg-blue-200 focus:bg-blue-600 rounded focus:text-white"
                onClick={() => setColor("#BFDBFE")}
              >
                trabajo
              </button>
              <button
                className="me-2 my-1 inline-flex items-center px-4 py-1 text-sm font-medium text-green-800 bg-green-200 focus:bg-green-600 focus:text-white rounded"
                onClick={() => setColor("#BBF7D0")}
              >
                personal
              </button>
              <button
                className="me-2 my-1 inline-flex items-center px-4 py-1 text-sm font-medium text-red-800 bg-red-200 focus:bg-red-600 focus:text-white rounded"
                onClick={() => setColor("#FECACA")}
              >
                urgente
              </button>
              <button
                className="me-2 my-1 inline-flex items-center px-4 py-1 text-sm font-medium text-orange-800 bg-orange-200 focus:bg-orange-600 focus:text-white rounded"
                onClick={() => setColor("#FED7AA")}
              >
                familia
              </button>
            </div>
            <button
              onClick={afegirTarea}
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-fit px-6 py-1.5 text-center mx-10"
            >
              Enviar
            </button>
            {mensaje && (
              <div className="bg-red-100 border border-red-400 text-red-700 text-sm w-fit px-3 py-1 my-2 mx-10 flex">
                <svg
                  className="fill-current h-4 my-auto mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                </svg>
                {mensaje}
              </div>
            )}
          </div>
          <div className="flex-col border-l border-gray-300 pl-4">
            <p className="mx-4 text-2xl font-bold">Lista</p>
            <div className="mx-4">
              {llistaTareas.map((e, i) => (
                <span
                  key={i}
                  className="me-2 my-1 inline-flex items-center px-4 py-1 text-sm font-medium text-blue-800 rounded"
                  style={{ backgroundColor: e.color }}
                >
                  {e.tarea}
                  <button
                    onClick={() => eliminaTarea(i)}
                    className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm"
                  >
                    <svg
                      className="w-2 h-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
