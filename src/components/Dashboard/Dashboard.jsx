import PokeCard from "../PokeCard/PokeCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { selectedPokemons } = useSelector(state => state.pokemon);

  return (
    <div>
      <ul>
        {
          selectedPokemons.map((p) => (
            <li key={`${p.name}_${p.number}`}>
              <Link to={`/pokemon/${p.id}`}>
                <PokeCard
                  name={p.name}
                  number={p.id}
                  photo={p.sprites.front_default}
                />
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Dashboard;