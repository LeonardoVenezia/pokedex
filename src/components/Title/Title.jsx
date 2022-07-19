import "./Title.scss";

const Title = ({ title, type = "electric" }) => {
    return (
        <h1 className={`Title Title--${type}`}>{title}</h1>
    );
};

export default Title;
