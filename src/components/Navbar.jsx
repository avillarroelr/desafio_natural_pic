import { Link } from "react-router-dom";
// Mavbar se mantiene sin cambios y se usa link para las rutas a Home y Favoritos
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
