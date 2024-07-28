import img1 from '../../assets/career/1.webp';
import img2 from '../../assets/career/2.webp';
import img3 from '../../assets/career/3.webp';
import img4 from '../../assets/career/4.webp';
import img5 from '../../assets/career/5.webp';
const Process = () => {
  return (
    <div className="row mx-auto container my-5">
      <h2 className="fw-bold text-center" style={{ fontSize: 35 }}>
        Selection Process
      </h2>

      <div className="selection_process">
        <div className="timeline_job">
          <ul>
            <li>
              <div className="right_content">
                <h2>CV Submission</h2>
                <p>
                  Kickstart your journey by sending your CV to our designated
                  email. Showcase your skills, experience, and passion.
                </p>
              </div>
              <div className="left_content">
                <img
                  src={img1}
                  alt="CV Submission"
                  className="rounded-circle"
                />
              </div>
            </li>
            <li>
              <div className="right_content">
                <h2>Initial Review</h2>
                <p>
                  Our team carefully reviews your application to assess a fit
                  with our culture and needs.
                </p>
              </div>
              <div className="left_content">
                <img
                  src={img2}
                  alt="Initial Review"
                  className="rounded-circle"
                />
              </div>
            </li>
            <li>
              <div className="right_content">
                <h2>Virtual Interview</h2>
                <p>
                  Connect with us through a video call for an in-depth
                  discussion about your expertise and career aspirations.
                </p>
              </div>
              <div className="left_content">
                <img
                  src={img3}
                  alt="Virtual Interview"
                  className="rounded-circle"
                />
              </div>
            </li>
            <li>
              <div className="right_content">
                <h2>Final Review</h2>
                <p>
                  Our team deliberates to ensure we make the best decision for
                  you and us.
                </p>
              </div>
              <div className="left_content">
                <img src={img4} alt="Final Review" className="rounded-circle" />
              </div>
            </li>
            <li>
              <div className="right_content">
                <h2>Job Offer</h2>
                <p>
                  If it's a match, we extend an offer for you to become part of
                  our ZSI family.
                </p>
              </div>
              <div className="left_content">
                <img
                  src={img5}
                  alt="Job Offer"
                  className="rounded-circle img-fluid"
                />
              </div>
            </li>

            <div style={{ clear: 'both' }} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Process;
