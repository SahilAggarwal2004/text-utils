export default function Navbar(props) {

    function changeTheme() {
        props.setTheme(document.querySelector("select").value)
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <select className={`no-out form-select bg-${props.theme} text-white mx-2 my-1`} aria-label="Default select example" style={{ width: "auto" }} onChange={changeTheme}>
                        <option value="primary" className={`bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>Blue Theme</option>
                        <option value="success" className={`bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>Green Theme</option>
                        <option value="danger" className={`bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>Red Theme</option>
                    </select>
                    <select className={`no-out form-select bg-${props.theme} text-white mx-2 my-1`} aria-label="Default select example" style={{ width: "auto" }} onChange={props.toggleMode}>
                        <option value="light" className={`bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>Light Mode</option>
                        <option value="dark" className={`bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>Dark Mode</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}
