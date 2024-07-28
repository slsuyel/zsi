import CareerBanner from './CareerBanner';
import JobCard from './JobCard';
import './Career.css';
import ExploreJobs from './ExploreJobs';
import Perks from './Perks';
import Process from './Process';
import ContactForm from '../Contact/ContactForm';
const Career = () => {
  const data = [1, 2, 3, 4];

  return (
    <>
      <CareerBanner />

      <ExploreJobs />
      <Perks />
      <Process />
      <div style={{ background: '#e7ebed75' }}>
        <div className="job-cards  row mx-auto custom_container">
          {data.map(index => (
            <div key={index + 1} className="col-md-4 my-2">
              <JobCard />
            </div>
          ))}
        </div>
      </div>

      <ContactForm />
    </>
  );
};

export default Career;
