import Title from "../Title/Title";
import "./Layout.scss";

const Layout = ({ children, extraHeader, title = "Pokedex", type }) => {
    return (
        <div className={`Layout ${type}`}>
            <header>
                <Title title={title} type={type} />
                {extraHeader}
            </header>
            <main className="Layout__main">{children}</main>
            <footer className="Layout__footer">
                <p className="Layout__footerText">Developed by Leo</p>
            </footer>
        </div >
    );
};

export default Layout;
