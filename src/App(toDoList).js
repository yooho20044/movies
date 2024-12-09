import  {useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDOs] = useState([]);
  const onChange = (e) => {
    setToDo(e.target.value);
  }
  const onSumbit= (e) => {
    e.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDOs(currentArray => [toDo, ...currentArray]);
    setToDo("");
  }
  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSumbit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do.."/>
      <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      <hr />
    </div>
  );
}

export default App;
