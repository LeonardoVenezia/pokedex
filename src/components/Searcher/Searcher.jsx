import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    filterAZ,
    filterZA,
    filterHighest,
    filterLowest,
} from "../../states/pokemon/action";
import "./Searcher.scss";

const filtersActions = {
    "A-Z": filterAZ,
    "Z-A": filterZA,
    Highest: filterHighest,
    Lowest: filterLowest,
};
const Searcher = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pokemons } = useSelector(state => state.pokemon);
    const [text, setText] = useState('');
    const [error, setError] = useState(false);

    const handleChangeText = (e) => {
        setError(false);
        setText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const lowerText = text.toLowerCase();
        const pokeSearcher = pokemons.find(p => p.name === lowerText);
        if (pokeSearcher) navigate(`/pokemon/${pokeSearcher.id}`);
        setError(!!pokeSearcher);
    };

    const handleChangeFilter = (e) => {
        dispatch(filtersActions[e.target.value]());
    };

    return (
        <div className="Searcher">
            <form onSubmit={handleSubmit} className="Searcher__form">
                <select
                    className="Searcher__select"
                    name="filter"
                    id="filter"
                    onChange={handleChangeFilter}
                >
                    <option value="Lowest">Lowest</option>
                    <option value="Highest">Highest</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <input
                    className={`Searcher__name${error ? '--error' : ''}`}
                    type="text"
                    onChange={handleChangeText}
                    value={text}
                    placeholder="Pokename"
                />
                <input
                    className="Searcher__submit"
                    type="submit"
                    value="Search"
                />
            </form>
        </div>
    );
}

export default Searcher;
