import "./Footer.css";

function Footer({ mood }) {
  const socials = [
    {
      name: "GitHub",
      icon: "bi-github",
      link: "https://github.com/nouraldeenmouslly-glitch",
    },
    {
      name: "Instagram",
      icon: "bi-instagram",
      link: "https://www.instagram.com/nour.al.deen_mouslly",
    },
    {
      name: "WhatsApp",
      icon: "bi-whatsapp",
      link: "https://wa.me/963990752146",
    },
    {
      name: "Facebook",
      icon: "bi-facebook",
      link: "https://www.facebook.com/share/14sHRKpgGN3/",
    },
  ];

  const navigation = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <footer className={`main-footer ${mood ? "footer-light" : "footer-dark"}`} id="Contact">

      <div className="container">

        {/* Top Footer */}
        <div className="footer-top row align-items-center gy-4">

          <div className="col-lg-7">
            <span className="footer-eyebrow">
              <span className="footer-dot"></span>
              LET'S BUILD SOMETHING GREAT
            </span>

            <h2 className="footer-title">
              Have a project in mind?
              <br />
              <span>Let's work together.</span>
            </h2>

            <p className="footer-description">
              I'm always interested in new opportunities,
              creative ideas and meaningful collaborations.
              Let's create something exceptional together.
            </p>

            <a href="mailto:" className="footer-contact-btn">
              Let's Talk
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>

          <div className="col-lg-5">
            <div className="footer-profile-card">

              <div className="footer-profile-icon">
                <span>N</span>
              </div>

              <h3>Nour Mouslly</h3>

              <span className="footer-role">
                Front-End Developer
              </span>

              <p>
                Turning ideas into elegant digital experiences.
              </p>

              <div className="footer-availability">
                <span></span>
                Open to new opportunities
              </div>

            </div>
          </div>

        </div>

        <div className="footer-divider"></div>

        {/* Main Footer */}
        <div className="row gy-4 align-items-center footer-middle">

          <div className="col-lg-4">
            <a href="#home" className="footer-logo">
              <span>N</span>
              NOUR<span className="logo-accent">.</span>
            </a>

            <p className="footer-brand-text">
              Developer. Creator. Problem Solver.
            </p>
          </div>

          <div className="col-lg-4">
            <div className="footer-navigation">
              {navigation.map((item) => (
                <a href={item.link} key={item.name}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="footer-socials">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Nour Mouslly.
            All rights reserved.
          </p>

          <span>
            Designed & Built with
            <i className="bi bi-heart-fill"></i>
            by Nour.
          </span>

          <a href="#home" className="footer-back-top">
            BACK TO TOP
            <i className="bi bi-arrow-up"></i>
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;