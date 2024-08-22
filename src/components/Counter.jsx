import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counterSlice";
import { useState } from "react";

function Counter() {
  const counterValue = useSelector((state) => state.counter.value);
  const [range, setRange] = useState(1);
  const dispatch = useDispatch();
  console.log(range);
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center w-100 mt-3">
        <h2 style={{ fontSize: "70px", color: "black" }}>{counterValue}</h2>
        <div className="mt-5">
          <button
            className="btn btn-warning p-2"
            onClick={() => dispatch(decrement(Number(range)))}
          >
            DECREMENT
          </button>
          <button
            className="btn btn-success p-2 ms-3"
            onClick={() => dispatch(increment(Number(range)))}
          >
            INCREMENT
          </button>
          <button
            className="btn btn-danger p-2 ms-3"
            style={{ width: "120px" }}
            onClick={() => dispatch(reset())}
          >
            RESET
          </button>
        </div>
        <div>
          <input
            type="text"
            className="form-control mt-3 w-100"
            style={{ borderColor: "blue" }}
            placeholder="Enter the range"
            onChange={(e) => setRange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default Counter;
