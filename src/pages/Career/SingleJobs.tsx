import { Link } from "react-router-dom";

const SingleJobs = () => {
  return (
    <div className="job-overview">
      <div className="job-explain">
        <img
          src="https://www.pngall.com/wp-content/uploads/8/Retail-Business-PNG-File-Download-Free.png"
          className="job-bg"
          alt=""
        />
        <div className="job-logos">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style={{ backgroundColor: "#f76754" }}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M0 .5h4.2v23H0z"
              fill="#042b48"
              data-original="#212121"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z"
              fill="#fefefe"
              data-original="#f4511e"
            />
          </svg>
        </div>
        <div className="job-explain-content">
          <div className="job-title-wrapper">
            <div className="job-card-title">UI /UX Designer</div>
            <div className="job-action">
              <svg
                className="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-share-2"
              >
                <circle cx={18} cy={5} r={3} />
                <circle cx={6} cy={12} r={3} />
                <circle cx={18} cy={19} r={3} />
                <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
              </svg>
            </div>
          </div>
          <div className="job-subtitle-wrapper">
            <div className="company-name">
              Patreon <span className="comp-location">Londontowne, MD.</span>
            </div>
            <div className="posted">
              Posted 8 days ago
              <span className="app-number">98 Application</span>
            </div>
          </div>
          <table className="custom-table w-100 my-3">
            <tr>
              <td className="header-cell">Experience</td>
              <td className="header-cell">Work Level</td>
              <td className="header-cell">Employee Type</td>
              <td className="header-cell">Offer Salary</td>
            </tr>
            <tr>
              <td className="data-cell">Minimum 1 Year</td>
              <td className="data-cell">Senior level</td>
              <td className="data-cell">Full Time Jobs</td>
              <td className="data-cell">$2150.0 / Month</td>
            </tr>
          </table>

          <div className="overview-text">
            <div className="overview-text-header">Overview</div>
            <div className="overview-text-subheader">
              We believe that design (and you) will be critical to the company's
              success. You will work with our founders and our early customers
              to help define and build our product functionality, while
              maintaining the quality bar that customers have come to expect
              from modern SaaS applications. You have a strong background in
              product design with a quantitavely anf qualitatively analytical
              mindset. You will also have the opportunity to craft our overall
              product and visual identity and should be comfortable to flex into
              working.
            </div>
          </div>
          <div className="overview-text">
            <div className="overview-text-header">Job Description</div>
            <div className="overview-text-item">
              3+ years working as a product designer.
            </div>
            <div className="overview-text-item">
              A portfolio that highlights your approach to problem solving, as
              well as you skills in UI.
            </div>
            <div className="overview-text-item">
              Experience conducting research and building out smooth flows.
            </div>
            <div className="overview-text-item">
              Excellent communication skills with a well-defined design process.
            </div>
            <div className="overview-text-item">
              Familiarity with design tools like Sketch and Figma
            </div>
            <div className="overview-text-item">
              Up-level our overall design and bring consistency to end-user
              facing properties
            </div>
          </div>
        </div>
        <div className="text-center py-5">
          <Link
            to="/job-view"
            className="search-buttons card-buttons text-decoration-none text-center"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleJobs;
