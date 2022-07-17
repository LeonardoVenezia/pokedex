import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    fetchPokemons,
    filterAZ,
    filterZA,
    filterHighest,
    filterLowest,
} from "../../states/pokemon/action";

const Searcher = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const handleChangeText = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = async (e) => {
        dispatch(fetchPokemons());
        e.preventDefault();
    };
    const handleChangeFilter = (e) => {
        const filtersActions = {
            "A-Z": filterAZ,
            "Z-A": filterZA,
            Highest: filterHighest,
            Lowest: filterLowest,
        };
        dispatch(filtersActions[e.target.value]());
    };
    return (
        <div>
            <div>
                <select name="filter" id="filter" onChange={handleChangeFilter}>
                    <option value="Lowest">Lowest</option>
                    <option value="Highest">Highest</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChangeText}
                    value={text}
                />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}

export default Searcher;
