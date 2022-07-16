import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPokemons } from "../../states/pokemon/action";
// import { getPokemons } from "../../services/pokemons";

const Searcher = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = async (e) => {
        dispatch(fetchPokemons());
        e.preventDefault();
        // console.log(await getPokemons(text));
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={text}
                />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}

export default Searcher;
