import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo_maya.png"

function Navbar() {
  const navigate = useNavigate()

  function handleLogout() {
    if (window.confirm("Tem certeza que deseja sair?")) {
      localStorage.clear()
      navigate("/login")
    }
  }

  return (
    <nav style={{ backgroundColor: "#01577A" }} className="px-4 py-2 d-flex align-items-center justify-content-between">

      <div className="d-flex align-items-center gap-5">
        <img src={logo} alt="Maya Yamamoto RPG" style={{ height: "40px" }} />

        <div className="d-flex gap-4">
          <Link to="/patients" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>
            HOME/PACIENTES
          </Link>
          <Link to="/exercicios" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>
            EXERCICIOS
          </Link>
        </div>
      </div>

      <button
        onClick={handleLogout}
        style={{ color: "white", background: "none", border: "none", fontWeight: "500", cursor: "pointer", padding: 0 }}
      >
        SAIR
      </button>

    </nav>
  )
}

export default Navbar