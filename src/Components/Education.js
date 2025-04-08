export default function Education() {
  return (
    <div>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Jeppiaar srr Engineering college</h3>
              <div className="subheading mb-3">Bachelor of Engineering</div>
              <div>In Computer Science</div>
              <p>Percentage: Above 75% in all semesters</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">August 2017 - August 2021</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">Alphonsa Matric higher secondary school</h3>
              <div className="subheading mb-3">Maths-Biology Group</div>
              <p>Percentage: 80%</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">June 2015 - June 2017</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}
