import { FaMinus } from "@react-icons/all-files/fa/FaMinus";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increament, decreament } from "../Store/Actions/CounterActions";
import "./Counter.css";
function Counter() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleIncreament = () => {
    increament(dispatch);
  };
  const handleDecreament = () => {
    decreament(dispatch);
  };
  return (
    <div id="container">
      <div
        id="numero"
        className="numero"
        style={{ color: count < 0 && "#FE4A49" }}
      >
        {count}
      </div>
      <div className="flexStyle">
        <button id="boton2" onClick={handleDecreament}>
          <FaMinus />
        </button>
        <button id="boton1" onClick={handleIncreament}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default Counter;
