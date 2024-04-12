import "./App.css";
import Counter from "./components/counter/counter";
import Counter_class from "./components/counter_class/counter_class";
import Display from "./components/display/display";
import RccEditor from "./components/editor/rccEditor";
import RfcEditor from "./components/editor/rfcEditor";
import RenderList from "./components/renredList/renderList";

function App() {
  return (
    <>
      <Counter />
      <hr />
      <Counter_class />
      <hr />

      <RfcEditor />
      <hr />
      <RccEditor />
    </>
  );
}

export default App;
