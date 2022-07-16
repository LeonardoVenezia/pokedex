import './App.css';
import { useEffect } from 'react';
import Searcher from './components/Searcher/Searcher';
import Dashboard from './components/Dashboard/Dashboard';
import { fetchPokemons } from './states/pokemon/action';
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);
  return (
    <div>
      <Searcher />
      <Dashboard pokemons={[{ name: "pikachu", number: 1 }]} />
    </div>
  );
}

export default App;
