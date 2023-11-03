import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [age,setAge] = useState("0");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  const handleSubmit = async (name, email, age) => {
    const response = await fetch(
      "https://react-practice-99f93-default-rtdb.firebaseio.com",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        age,
      }),
    }
    );
    const data = await response.json();
    const obj = Object.values(data).filter((v) => v.name == "inada")[0];
    setAge(obj.age + 10);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>Age: </label>
        <input
          type={"number"}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <label>Email: </label>
        <input
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{marginBottom: 20}}
        ></input>
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
}

export default App;
