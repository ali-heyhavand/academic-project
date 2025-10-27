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
            <NavLink className="nav-link p-2 p-md-4" to="/home">
              خانه
            </NavLink>
            <NavLink className="nav-link p-2 p-md-4" to="/blog">
              ویرایش مقاله
            </NavLink>
            <NavLink className="nav-link p-2 p-md-4" to="/panel">
              پنل
            </NavLink>
            <NavLink className="nav-link p-2 p-md-4" to="/login">
              ورود
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
