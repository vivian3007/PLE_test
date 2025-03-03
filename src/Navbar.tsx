export default function Navbar ({onLinkClicked}: { onLinkClicked: any }) {
    return (
        <nav className="Navbar">
            <h1>Vormen</h1>
            <ul>
                <li
                    onClick={() => {
                        onLinkClicked("circle");
                    }}
                    className={"navlink"}
                >
                    Cirkel
                </li>
                <li
                    onClick={() => {
                        onLinkClicked("square");
                    }}
                    className={"navlink"}
                >
                    Vierkant
                </li>
                <li
                    onClick={() => {
                        onLinkClicked("rectangle");
                    }}
                    className={"navlink"}
                >
                    Rechthoek
                </li>
                <li
                    onClick={() => {
                        onLinkClicked("oval");
                    }}
                    className={"navlink"}
                >
                    Ovaal
                </li>
            </ul>
        </nav>
    );
};

