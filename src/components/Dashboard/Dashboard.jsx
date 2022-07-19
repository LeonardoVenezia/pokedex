import PokeCard from "../PokeCard/PokeCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Dashboard.scss";
import Spinner from "../Spinner/Spinner";

const Dashboard = () => {
  const { selectedPokemons } = useSelector(state => state.pokemon);
  return (
    <div className="Dashboard">
      <ul className="Dashboard__list">
        {
          selectedPokemons.map((p) => (
            <li key={`${p.name}_${p.number}`}>
              <Link to={`/pokemon/${p.id}`}>
                <PokeCard
                  name={p.name}
                  number={p.id}
                  photo={p.sprites.front_default}
                  type={p.types[0].type.name}
                />
              </Link>
            </li>
          ))
        }
        {
          !selectedPokemons.length && <Spinner />
        }
      </ul>
    </div>
  );
};

export default Dashboard;