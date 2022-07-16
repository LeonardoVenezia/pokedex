import './App.css';
import { useEffect } from 'react';
import Searcher from './components/Searcher/Searcher';
import Dashboard from './components/Dashboard/Dashboard';
import { fetchPokemons, selectPokemons } from './states/pokemon/action';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { pokemons } = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);
  useEffect(() => {
    dispatch(selectPokemons());
  }, [pokemons]);

  return (
    <div>
      <Searcher />
      <Dashboard pokemons={[{ name: "pikachu", number: 1 }]} />
    </div>
  );
}

export default App;
