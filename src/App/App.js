import './App.css';
import AnimatedCursor  from "../hooks/AnimatedCursor";

function App() {
  return (
    <>
    <h1>Hello, world!</h1>
    <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255, 0"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
    </>
  );
}

export default App;
