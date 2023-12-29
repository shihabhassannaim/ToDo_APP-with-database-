import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ToDo from "./components/toDo";
import { baseURL } from "./utils/constant";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      setToDos(res.data);
    });
  }, [update]);
  console.log(toDos);

  const saveTodo = () => {
    axios.post(`${baseURL}/save`, { toDo: input }).then((res) => {
      setUpdate(!update);
      setInput("");
    });
  };

  return (
    <>
      <h1 className="mt-24 text-5xl font-bold mb-12 text-gray-600 text-center">
        Todo App
      </h1>
      <div className="flex mb-4 justify-center">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          className="border p-2 mr-2"
          placeholder="Add a new todo"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={saveTodo}
        >
          Add Todo
        </button>
      </div>
      <div>
        {toDos.map((el) => (
          <ToDo
            text={el.toDo}
            id={el._id}
            update={update}
            setUpdate={setUpdate}
          />
        ))}
      </div>
    </>
  );
};

export default App;
