import PokeCard from "../PokeCard/PokeCard";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { selectedPokemons } = useSelector(state => state.pokemon);
  console.log(selectedPokemons);
  return (
    <div>
      {
        selectedPokemons.map((p) => (
          <PokeCard
            key={`${p.name}_${p.number}`}
            name={p.name}
            number={p.id}
            photo={p.sprites.front_default}
          />
        ))
      }
    </div>
  );
};

export default Dashboard;