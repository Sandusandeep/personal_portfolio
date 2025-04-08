export default function About() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Sandeep C{/* <span className="text-primary">Native</span> */}
        </h1>
        <div className="subheading mb-5">Software Developer - Chennai</div>
        <p className="lead mb-5">
          I am experienced in building modules for banking applications related
          to Temenos product.Had experience working as a Fullstack developer
          with hands-on experience in front end development using Kony and
          Infinity technologies, and Backend interface application fabric.
        </p>
        <div className="social-icons">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/saurabhnative/"
          >
            <i style={{ fontSize: "54px" }} class="fa">
              &#xf08c;
            </i>
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="social-icon" href="https://github.com/saurabhnative">
            <i style={{ fontSize: "58px", marginLeft: "30%" }} class="fa">
              &#xf09b;
            </i>
            <i className="fab fa-github" />
          </a>
          {/* <a className="social-icon" href="https://twitter.com/saurabhnative">
            <i className="fab fa-twitter" />
          </a>
          <a
            className="social-icon"
            href="https://www.youtube.com/channel/UCtWzTuAO-uEnGhrktGNPi0g/featured"
          >
            <i className="fab fa-youtube" />
          </a>
          <a className="social-icon" href="https://smhatre59.medium.com/">
            <i className="fab fa-medium" />
          </a> */}
        </div>
      </div>
    </section>
  );
}
