import logo from './logo.svg';
import './App.css';
import styles from './components/App.module.css';
import FormBuilder from './components/FormBuilder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Form Builder</h1>
      </header>
      <FormBuilder />
    </div>
  );
}

export default App;
