import img1 from '../../assets/perks/attendance.webp';
import img2 from '../../assets/perks/balanced-diet.webp';
import img3 from '../../assets/perks/experience.webp';
import img4 from '../../assets/perks/hands.webp';
import img5 from '../../assets/perks/health-care.webp';
import img6 from '../../assets/perks/mental-health.webp';
import img7 from '../../assets/perks/professional-development.webp';
import img8 from '../../assets/perks/retirement-plan.webp';
import img9 from '../../assets/perks/work-from-home-1.webp';

const Perks = () => {
  const perks = [
    {
      title: 'Healthcare Coverage',
      description:
        'Comprehensive medical insurance to ensure employees and their families are protected.',
      img: img5,
    },
    {
      title: 'Rewards Program',
      description:
        'Celebrate your achievements with us through bonuses, awards, and acknowledgments.',
      img: img3,
    },
    {
      title: 'Retirement Savings',
      description:
        'Contributions to retirement plans to support financial security for the future.',
      img: img8,
    },
    {
      title: 'Professional Development',
      description:
        'Access to courses, workshops, and seminars for continual learning and career advancement.',
      img: img7,
    },
    {
      title: 'Remote Work Flexibility',
      description:
        'The ability to work from anywhere to balance productivity with personal life.',
      img: img9,
    },
    {
      title: 'Fitness and Wellness Programs',
      description:
        'Initiatives to encourage a healthy lifestyle, including gym memberships or wellness stipends.',
      img: img2,
    },
    {
      title: 'Generous Paid Time Off',
      description:
        'Ample vacation days, holidays, and personal time to rest and rejuvenate.',
      img: img1,
    },
    {
      title: 'Mental Health Support',
      description:
        'Resources and programs dedicated to maintaining mental and emotional well-being.',
      img: img6,
    },
    {
      title: 'Best Team Building Events',
      description:
        'Regular team outings, both virtual and in-person, to foster camaraderie and collaboration.',
      img: img4,
    },
  ];

  return (
    <div className="container py-5">
      <div className="my-5">
        <h2 className="fw-bold my-2 text-center"> Work Perks</h2>
        <p className="fs-5 fw-medium mb-5 my-2 text-center">
          {' '}
          Benefits that support and inspire.
        </p>
      </div>

      <div className="row mx-auto">
        {perks.map((perk, index) => (
          <div
            className="align-content-center border col-md-4 px-4"
            style={{ minHeight: '250px' }}
            key={index}
          >
            <div className="align-items-start d-flex">
              <img src={perk.img} width={70} alt={perk.title} />
              <div className="px-3">
                <h5 className="service-title-h">{perk.title}</h5>
                <p>{perk.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perks;
