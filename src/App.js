import './App.css';
import Shop from './components/Shop/Shop';

function App() {
  const titleStyle = {
    fontSize: '30px',
    textTransform: 'Capitalize',
    fontWeight: '500',
    textAlign: 'center'
  }
  return (
    <div className="App">
      <h1 style={titleStyle}>Mobile Shop Project.</h1>
      <Shop></Shop>
    </div>
  );
}

export default App;
