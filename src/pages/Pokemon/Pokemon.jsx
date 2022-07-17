import { useParams } from "react-router-dom";

const Pokemon = () => {
    let params = useParams();
    return (
        <div>
            <p>id: {params.id}</p>
        </div>
    );
};

export default Pokemon;
