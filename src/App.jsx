import Counter from "./components/counterApp/Counter";
import MultiuseState from "./components/FormControl/MultiuseState";
import OneUseState from "./components/FormControl/OneUseState";
import Like from "./components/Like&Unlike/Like";

function App() {
  return (
    <>
      <Counter />
      <Like />
      <MultiuseState />
      <OneUseState />
    </>
  );
}

export default App;
