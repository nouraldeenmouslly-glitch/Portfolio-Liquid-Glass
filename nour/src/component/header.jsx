import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fontsource/cairo";
import { useState } from "react";
function Header({mood,setMood}) {
  return (
    <header className={`${mood ? "sun" : "moon"} `}>
      <nav className={`navbar navbar-expand-lg ${mood ? "nav-sun" : ""} `}>
        <div className="container ">
          <a
            href="#home"
            className={`navbar-brand ${mood ? "text-black" : "text-white"}  fs-4 ms-4 `}
          >
            <div className="brand-logo d-flex align-items-center justify-content-center align-item-center ">
              <div
                className={`${mood ? "text-warning" : ""} logo-mark me-2 my-auto`}
              >
                N
              </div>{" "}
              <div>
                <div className="d-flex ">
                  <span
                    className={`${mood ? "brand-logo-sun" : "brand-logo-dark"} fs-5`}
                  >
                    Nour
                  </span>
                  <span
                    className={`${mood ? "brand-bold-sun" : "brand-bold-dark"} fs-5`}
                  >
                    AlDeen
                  </span>
                </div>
                <div>
                  <p className="lead font-front">front-end developer</p>
                </div>
              </div>
            </div>{" "}
          </a>
          <button
            type="button"
            className={`navbar-toggler bg-white ${mood ? "drop-nav-sun" : " drop-nav-dark"}`}
            data-bs-target="#navbarNav"
            data-bs-toggle="collapse"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a
                  className={`nav-link ${mood ? "text-dark link-sun " : "text-white link-darks"}  `}
                  href="#home"
                >
                  Home
                </a>
              </li>{" "}
              <li className="nav-item">
                <a
                  className={`nav-link ${mood ? "text-dark link-sun " : "text-white link-darks"}  `}
                  href="#home"
                >
                  About
                </a>
              </li>{" "}
              <li className="nav-item">
                <a
                  className={`nav-link ${mood ? "text-dark link-sun " : "text-white link-darks"}  `}
                  href="#Projects"
                >
                  Projects
                </a>
              </li>{" "}
              <li className="nav-item">
                <a
                  className={`nav-link ${mood ? "text-dark link-sun " : "text-white link-darks"}  `}
                  href="#home"
                >
                  Skills
                </a>
              </li>{" "}
              <li className="nav-item">
                <a
                  className={`nav-link ${mood ? "text-dark link-sun " : "text-white link-darks"}  `}
                  href="#Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div
              className={`d-flex ms-3 align-items-center justify-content-center gap-2 ${mood ? "bg-white-sun" : "bg-white-sun"} black px-3 py-2 rounded-pill`}
            >
              <button
                type="button"
                onClick={() => setMood((mood) => !mood)}
                className={`btn btn-sm rounded-circle ${mood ? "btn-warning" : "btn-primary"}`}
              >
                <i className={`bi ${mood ? "bi-sun" : "bi-moon"}`}></i>
              </button>
              <div className="form-check form-switch m-0">
                <input
                  type="checkbox"
                  className="form-check-input "
                  checked={mood}
                  onChange={() => setMood((mood) => !mood)}
                  id="mood-switch"
                  aria-label="Toggle color mode"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-flex align-items-center justify-content-center mx-auto">
            <img src="/me.jpeg" className="" alt="lorem" />
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="info d-flex flex-column mx-auto  px-sm-3 px-md-4 px-lg-4 py-5 my-4">
              <p className="lead text-white opacity-75 Hello">Hello, I'm </p>
              <h1 className="mb-3">
                <span
                  className={`${mood ? "brand-logo-sun" : "brand-logo-dark"} fs-1`}
                >
                  Nour{" "}
                </span>
                <span
                  className={`${mood ? "brand-bold-sun" : "brand-bold-dark"} fs-1`}
                >
                  ALDeen Mouslly
                </span>
              </h1>
              <h2
                className={`${mood ? "brand-bold-sun bg-front-sun" : "brand-bold-dark bg-front-dark"} rounded-5 px-4 py-2 mb-3 me-auto`}
              >
                &lt;/&gt; Front-end developer
              </h2>
              <p
                className={`mb-2 ${mood ? "bg-student-sun " : "bg-student-dark"}  fs-4  ps-2 rounded-5`}
              >
                Information Engineering Student
              </p>
              <p className="lead mb-4 text-white w-75">
                I build modern and responsive websites with a focus on user
                experience and clean design.
              </p>
              <div className="mb-4 d-flex ">
                <button className={`btn  rounded-5   me-5 ${mood?"btn-warning":"btn-primary"}`}>
                  View projects <i className="bi bi-eye"></i>
                </button>
                <button className={`btn  rounded-5 ${mood?"btn-outline-warning":"btn-outline-primary"}`}  >
                  <i className="bi bi-envelope"></i> Contact Me
                </button>
              </div>
              <div className="icons ">
                <div className="single-icon d-flex justify-content-around align-items-center flex-column text-center">
                  <i
                    title="HTML"
                    className="devicon-html5-plain colored fs-3 me-2"
                  ></i>{" "}
                  <span className="text-white">HTML</span>
                </div> 
                <div className="single-icon d-flex justify-content-center align-item-center flex-column text-center">
                  <i
                    title="CSS"
                    className="devicon-css3-plain colored fs-3 me-2"
                  ></i>{" "}
                  <span className="text-white">CSS</span>
                </div>
                <div className="single-icon d-flex justify-content-center align-item-center flex-column text-center">
                  <i
                    title="javascript"
                    className="devicon-javascript-plain colored fs-3 me-2"
                  ></i>{" "}
                  <span className="text-white">JAVASCRIPT</span>
                </div>
                <div className="single-icon d-flex justify-content-center align-item-center flex-column text-center">
                  {" "}
                  <i
                    title="Bootstrap"
                    className="devicon-bootstrap-plain colored fs-3 me-2"
                  ></i>{" "}
                  <span className="text-white">BOOTSTRAP</span>
                </div>
                <div className="single-icon d-flex justify-content-center align-item-center flex-column text-center">
                  {" "}
                  <i
                    title="React"
                    className="devicon-react-original colored fs-3"
                  ></i>{" "}
                  <span className="text-white">REACT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </header>
    
  );
}
export default Header;
