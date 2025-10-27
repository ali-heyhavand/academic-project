import {NavLink} from "react-router-dom"
import "./Mynav.css";



function Mynav() {
  return (
    <>
      <nav id="navId" className="navbar navbar-expand-lg rounded-bottom-5" >
        <div className="container px-lg-5">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <i className='bx  bx-book-bookmark me-2'  ></i>  
            دانش پژوهش
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link p-2 p-md-4" to="/home">خانه</NavLink>
              <NavLink className="nav-link p-2 p-md-4" to="/blog">ویرایش مقاله</NavLink>
              <NavLink className="nav-link p-2 p-md-4" to="/panel">پنل</NavLink>
              <NavLink className="nav-link p-2 p-md-4" to="/login">ورود</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Mynav;
