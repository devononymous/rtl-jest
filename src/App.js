import './App.css';
import './login'

function App() {
  const a = 2;
  const b = 4;
  return (
    <div className="App">
      <header className="App-header">
     
      <p>Learn react</p>

       <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
       </ul>

       <div>
        <h1 data-testid="mytestid"> using data test id to test </h1>
        <span data-testid="get-sum" title="sum">{a + b}</span>
       </div>
      </header>

    </div>
  );
}

export default App;
