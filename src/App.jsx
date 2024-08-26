import "./index.css";
import { useState } from "react";
//// an array of objects
const initialItems = [
  { id: 1, description: "PassPorts", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "CHarger", quantity: 1, packed: false },
];
export default function App() {
  return (
    <div className="App">
      {/* below is the nested components we are wrapping the componets insdie a comp*/}
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1> 🌴 Far Away 💼</h1>;
}
function Form() {
  //// react will control the elemennts in the comp
  const [description, setdescription] = useState("");
  //// react will call the function as soon as the onSubmit event happens
  //// add event handler to listem to user input
  function handleSubmit(e) {
    /// this func will prevent the page from reloading
    e.preventDefault(); /// using this we are proventing the page from reload
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 👉</h3>
      <select>
        {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        //// below is the syntax for onChange event where is e is passed as an argument which is used to setdescription to the target value
        onChange={(e) => setdescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {
          /// use map method on the array of elements
          initialItems.map(
            (item) => (
              <Item item={item} key={item.id} />
            )
            /// item is arguemnt passed to te call back function in each iteration of array
            //// it is an object {item}
          )
        }
      </ul>
    </div>
  );
}
/// here item is a prop that is passed from parent to child component
function Item({ item }) {
  return (
    <li>
      <span>
        {item.description} {item.quantity}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X </em>
    </footer>
  );
}
