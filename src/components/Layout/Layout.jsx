import Title from "../Title/Title";
import "./Layout.scss";

const Layout = ({ children, extraHeader }) => {
    return (
        <div className="Layout">
            <header>
                <Title title="Pokedex" />
                {extraHeader}
            </header>
            <main className="Layout__main">{children}</main>
            <footer className="Layout__footer">
                <p className="Layout__footerText">Developed by Leo</p>
            </footer>
        </div>
    );
};

export default Layout;
