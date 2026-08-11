import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="fs-2 text-center mt-3">People</h1>
      </div>
      <div
        className="row p-3 mt-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img src="media/images/OmPrakash.jpg"  style={{borderRadius: "100%", width: "50%"}}/>
          <h5 className="mt-4">Om Prakash</h5>
          <h6>programmer</h6>
        </div>
        <div className="col-6 p-5">
          <p>Hi, I'm OmPrakash an aspiring Data Scientist & Software engineer with experience in data science, full-stack development, and algorithmic problem solving.</p>
            <p>My interests include AI/ML, backend development, data analytics, and building scalable applications.</p>
            <p>I am always learning, improving, and looking for opportunities to apply my skills to meaningful projects.</p>
            <p>Connect on <a href="https://www.linkedin.com/in/omprakash261/" style={{textDecoration: "none"}}>Linkedin</a> / <a href="https://github.com/OMPRAKASH261" style={{textDecoration: "none"}}>Github</a> / <a href="mailto:og04914@gmail.com" style={{textDecoration: "none"}}>Gmail</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
