import { Card } from 'antd';
import img1 from '../../../assets/icons/service-way/service-1.png';
import img2 from '../../../assets/icons/service-way/service-2.png';
import img3 from '../../../assets/icons/service-way/service-3.png';
import img4 from '../../../assets/icons/service-way/service-4.png';
import img5 from '../../../assets/icons/service-way/service-5.png';
import img6 from '../../../assets/icons/service-way/service-6.png';
const cardData = [
  {
    title: 'Global Network',
    text: 'Providing advanced development solutions globally. Our expert services to businesses worldwide, ensuring solutions for needs.',
    icon: 'fa fa-globe',
    img: img1,
  },
  {
    title: 'On-Time Results',
    text: 'We avoid unnecessary delays and obstacles by maintaining a proper workflow and ensuring that it is strictly followed.',
    icon: 'fa fa-clock',
    img: img4,
  },
  {
    title: 'Expert Team',
    text: 'Our team of expert developers is tech-savvy and knows how to apply the latest technology to solve a particular business challenge.',
    icon: 'fa fa-users',
    img: img3,
  },
  {
    title: 'Transparent Process',
    text: 'Our mobile app development process is open, where the information related to your project is completely shared with you.',
    icon: 'fa fa-eye',
    img: img2,
  },
  {
    title: 'End-to-End Services',
    text: 'To ensure quality output, we deliver services that include development, testing, and maintenance after deployment.',
    icon: 'fa fa-tasks',
    img: img6,
  },
  {
    title: '24x7 Support',
    text: 'Staying in line with our quality services, we ensure that all your problems are resolved and provide 24x7 customer service.',
    icon: 'fa fa-headphones',
    img: img5,
  },
];

const ServiceCard = () => {
  return (
    <div className="px-2 py-4" style={{ background: '#000000' }}>
      <div className="row mx-auto my-5 cpl-md-11">
        {cardData.map((data, index) => (
          <div className="col-md-4" key={index}>
            <Card
              hoverable
              className="mx-1 my-3 text-white border-0 py-4 px-2  "
              style={{ background: '#2A2035BA' }}
            >
              <div className="card-body ">
                {/* <i className={data.icon + " fa-3x mb-3"}></i> */}
                <div className="my-3">
                  <img loading="lazy" src={data.img} alt="" width={80} />
                </div>
                <div className="my-2">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text my-3 fs-6">{data.text}</p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
