import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-around py-3">
          <a className="navbar-brand d-flex align-items-center mb-3" href="#">
            <i className="bx  bx-book-bookmark me-2"></i>
            دانش پژوهش
          </a>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <NavLink className="nav-link p-1 p-md-3" to="#">
              <i className="bx bxl-github"></i>
            </NavLink>
            <NavLink className="nav-link p-1 p-md-3" to="#">
              <i className="bx bxl-instagram-alt"></i>
            </NavLink>
            <NavLink className="nav-link p-1 p-md-3" to="#">
              <i className="bx bxl-linkedin-square"></i>
            </NavLink>
            <NavLink className="nav-link p-1 p-md-3" to="#">
              <i className="bx bxs-envelope"></i>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="footer-des">
        <p>Design by Ali Heyhavand | 2025 </p>
      </div>
    </>
  );
}

export default Footer;
