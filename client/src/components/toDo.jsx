import axios from "axios";
import { baseURL } from "../utils/constant";

const toDo = ({ text, id, setUpdate, update }) => {
  const deleteTodo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      setUpdate(!update);
    });
  };
  return (
    <div className="mt-5 ml-96 h-24 ">
      <div className="flex rounded-xl bg-gray-500 h-full text-white mt-5 w-4/12 ml-72">
        <p className="mt-8 ml-16 text-xl font-bold w-1/2">{text}</p>
        <button className="mt-7 text-xl font-bold bg-stone-400 h-10 w-20 rounded-md hover:bg-stone-700">
          Edit
        </button>
        <button
          onClick={deleteTodo}
          className="mt-7 ml-5 text-xl font-bold bg-stone-400 h-10 w-20 rounded-md hover:bg-stone-700"
        >
          Del
        </button>
      </div>
    </div>
  );
};

export default toDo;
