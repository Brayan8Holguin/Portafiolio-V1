
import NavBar from './components/navBar/navBar.jsx'; // Corregido a NavBar
import Home from './components/Home/Home.jsx';
function App() {
  return (
    <div className='app-container'>
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;