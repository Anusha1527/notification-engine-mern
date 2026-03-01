import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{padding:"10px",background:"#111",color:"#fff"}}>
      <Link to="/">Dashboard | </Link>
      <Link to="/send">Send | </Link>
      <Link to="/logs">Logs | </Link>
      <Link to="/rules">Rules | </Link>
      <Link to="/analytics">Analytics | </Link>
      <Link to="/status">Status</Link>
    </nav>
  );
}