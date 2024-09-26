import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Product from './Product';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Hello nama="Jason Chrisyanto" pesan="Selamat Datang di kelas PW IF31" />
       <Product />
       <Register />
      </header>
    </div>
  );
}

export default App;
