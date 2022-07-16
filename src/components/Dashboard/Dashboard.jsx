import PokeCard from "../PokeCard/PokeCard";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { pokemons } = useSelector(state => state.pokemon);
  console.log(pokemons);
  return (
    <div>
      {
        pokemons.map((p) => (
          <PokeCard
            key={`${p.name}_${p.number}`}
            name={p.name}
            number={p.number}
          />
        ))
      }
    </div>
  );
};

export default Dashboard;