import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/fratures/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="items-center w-full h-screen flex justify-center ">
        <div className="flex border border-purple-300 bg-slate-200 p-6 gap-3">
          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-2 bg-green-500 text-xl font-semibold text-white rounded-md"
          >
            Increment
          </button>
          <h1 className="text-3xl mx-`19">{count}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-2 bg-red-500 rounded-md text-xl font-semibold text-white"
          >
            Dcrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
