import {Link} from "react-router-dom"

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                    {/* Since we can't pass a function call in onChange(which is an event listener) and must pass a function there, we will pass an arrow function which calls our setTheme function with given parameter */}
                    <select className={`no-out form-select btn-${props.theme} mx-2 my-1`} aria-label="Default select example" style={{ width: "auto" }} onChange={()=>{props.setTheme(document.querySelector("select").value)}}>
                        <option value="primary" className={`bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>Blue Theme</option>
                        <option value="success" className={`bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>Green Theme</option>
                        <option value="warning" className={`bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>Yellow Theme</option>
                        <option value="danger" className={`bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>Red Theme</option>
                    </select>
                    <select className={`no-out form-select btn-${props.theme} mx-2 my-1`} aria-label="Default select example" style={{ width: "auto" }} onChange={props.toggleMode}>
                        <option value="light" className={`bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>Light Mode</option>
                        <option value="dark" className={`bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>Dark Mode</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}