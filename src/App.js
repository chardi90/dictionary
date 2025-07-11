import "./App.css";
import SearchForm from "./SearchForm.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <SearchForm />
        </header>
        <main>
          <h1 className="text-center">Dictionary</h1>
          <h2 className="text-center">Knowledge at your fintertips!</h2>
        </main>
        <footer>
          Coded by <a href="/">Chardi</a>.
        </footer>
      </div>
    </div>
  );
}
