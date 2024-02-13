import { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState("");
  const [color, setColor] = useState("");

  function afegirTarea() {
    setTareas([...tareas, { tarea: tarea, color: color }]);
    setTarea("");
    setColor("");
  }

  function eliminaTarea(i) {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(i, 1);
    setTareas(nuevasTareas);
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="m-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">
          TO DO LIST
        </h1>
        <div className="grid grid-cols-2 gap-4 mt-20">
          <div className="flex flex-col">
            <label className="mx-10 text-2xl font-bold">Tasca</label>
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
              <button className="me-2 my-1 inline-flex items-center px-4 py-1 text-sm font-medium text-blue-800 bg-blue-200 focus:bg-blue-600 rounded focus:text-white" onClick={() => setColor("#BFDBFE")}>
                treball
              </button>
              <button className="me-2 my-1 inline-flex items-center px-4 py-1 text-sm font-medium text-green-800 bg-green-200 focus:bg-green-600 focus:text-white rounded" onClick={() => setColor("#BBF7D0")}>
                personal
              </button>
              <button className="me-2 my-1 inline-flex items-center px-4 py-1 text-sm font-medium text-red-800 bg-red-200 focus:bg-red-600 focus:text-white rounded" onClick={() => setColor("#FECACA")}>
                urgente
              </button>
              <button className="me-2 my-1 inline-flex items-center px-4 py-1 text-sm font-medium text-orange-800 bg-orange-200 focus:bg-orange-600 focus:text-white rounded" onClick={() => setColor("#FED7AA")}>
                familia
              </button>
            </div>
            <button
              onClick={afegirTarea}
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-fit px-6 py-1.5 text-center mx-10"
            >
              Enviar
            </button>
          </div>
          <div className="flex-col border-l border-gray-300 pl-4">
            <p className="mx-4 text-2xl font-bold">Llista</p>
            <div className="mx-4">
              {tareas.map((e, i) => (
                <span
                  key={i}
                  className="me-2 my-1 inline-flex items-center px-4 py-1 text-sm font-medium text-blue-800 rounded" style={{backgroundColor:e.color}}
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