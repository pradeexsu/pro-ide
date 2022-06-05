class NavBar extends React.Component {
    render() {
        const navIcon =
            "https://img.icons8.com/plasticine/100/000000/pandora-app.png";

        const theme = {
            Ambiance: "ambiance",
            "Gruvbox-dark": "gruvbox-dark",
            Darcula: "darcula",
            Dracula: "dracula",
            "Base16 Dark": "base16-dark",
            Eclipse: "eclipse",
            Icecoder: "icecoder",
            "Lesser Dark": "lesser-dark",
            "Material Darker": "material-darker",
            "Material Palenight": "material-palenight",
            Monokai: "monokai",
            Neat: "neat",
            Neo: "neo",
            Nord: "nord",
            Shadowfox: "shadowfox",
            "Ayu Mirage": "ayu-mirage",
            Yonce: "yonce",
            "XQ Light": "xq-light",
            "Ambiance Mobile": "ambiance-mobile"
        };
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
                <a className="navbar-brand" href="#">
                    <img
                        src={navIcon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="p-logo"
                    />
                    Pradeep
                </a>

                <ul className="navbar-expend navbar-nav">
                    <li className="nav-item active">
                        <DropDown arr={theme} />
                    </li>
                    {/* 
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dark/Light
              </a>
            </li>         
           */}
                </ul>
            </nav>
        );
    }
}
export default NavBar;