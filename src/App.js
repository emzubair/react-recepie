import './App.css';
import PizzaList from './pizzarias/pizzarias';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://book.nyc3.digitaloceanspaces.com/pizza.jpg" className="App-logo" alt="logo" />
        <h1>
          Pizza vs Pizza
        </h1>
        <PizzaList />
      </header>
    </div>
  );
}

export default App;
