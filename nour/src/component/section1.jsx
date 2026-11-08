function Section1({ mood }) {
  const githubProfile = "https://github.com/nouraldeenmouslly-glitch";

  const projects = [
    {
      title: "Shop Card",
      description:
        "A collaborative e-commerce platform built by a team of four. I designed the homepage and contributed to complex functionality, including the shopping experience, checkout, order confirmation, login and account registration.",
      image: "/card.webp",
      technologies: ["React", "JavaScript", "Bootstrap", "CSS", "HTML"],
      type: "Featured Project · E-Commerce",
      live: "https://effortless-malabi-91c4f3.netlify.app",
      github: githubProfile,
    },
    {
      title: "restaurant Japanese",
      description:
        "A modern Japanese restaurant website featuring elegant design, responsive layouts and an engaging dining experience, built with clean frontend technologies.",
      image: "/bg.webp",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      type: "Frontend · Restaurant",
      live: "https://6a62c06b840332fdd186074f--grand-sunshine-278a59.netlify.app/",
      github: githubProfile,
    },
    {
      title: "Italian restaurant",
      description:
        "A premium Italian restaurant website featuring a luxurious visual identity, elegant layouts and a responsive interface designed to deliver a refined user experience.",
      image: "/chef-4.webp",
      technologies: ["HTML", "CSS", "Bootstrap"],
      type: "Frontend · Restaurant",
      live: "https://tubular-dango-3f3b72.netlify.app",
      github: githubProfile,
    }, {
      title: "Anime Card",
      description:
        "A premium Effict Card",
      image: "/card8.jpg",
      technologies:["React", "JavaScript", "Bootstrap", "CSS", "HTML"],
      type: "Frontend · Restaurant",
      live: "https://zingy-marigold-477832.netlify.app",
      github: githubProfile,
    },
  ];

  return (
    <section
      id="Projects"
      className={`projects-section ${
        mood ? "projects-sun section-sun" : "projects-moon section-dark"
      }`}
    >
      <div className="container py-5">

        <div className="projects-heading text-center mx-auto">
          <span className="projects-eyebrow">
            SELECTED WORK
          </span>

          <h2>
            Projects that turn
            <span> ideas into experiences.</span>
          </h2>

          <p>
            A selection of projects built with a focus on responsive design,
            clean architecture and meaningful user experiences.
          </p>
        </div>

        {/* Projects */}
        <div className="row g-4 mt-5">
          {projects.map((project, index) => (
            <div className="col-lg-6" key={project.title}>

              <article className="project-card">

                {/* Image */}
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <div className="project-overlay">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-preview"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                      Live Preview
                    </a>
                  </div>

                  <span className="project-number">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="project-content">

                  <div className="d-flex justify-content-between align-items-start gap-3">

                    <div>
                      <span className="project-type">
                        {project.type}
                      </span>

                      <h3>{project.title}</h3>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-button"
                      aria-label="Visit my GitHub profile"
                    >
                      <i className="bi bi-github"></i>
                    </a>

                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-footer">

                    <div className="technology-list">
                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Explore
                      <i className="bi bi-arrow-right"></i>
                    </a>

                  </div>

                </div>
              </article>

            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="projects-bottom text-center">
          <span>
            More projects coming soon
          </span>
        </div>

      </div>
    </section>
  );
}

export default Section1;