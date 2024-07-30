import { useEffect, useState } from 'react';
import us from '../../assets/images/us-con.webp';
// import dhk from '../../assets/images/dhk-con.webp';
import { Form, Input, Button, Checkbox, Select, Card } from 'antd';
import { Row, Col } from 'react-bootstrap';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiryType: string;
  coverLetter?: string;
}

const { Option } = Select;

const Contact = () => {
  const onFinish = (values: FormValues) => {
    console.log('Received values:', values);
  };

  const words = [
    'solutions',
    'support',
    'expertise',
    'growth',
    'technology',
    'potential',
    'success',
    'opportunity',
    'innovation',
    'collaboration',
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex: number) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    typeWriter();
  }, [currentWordIndex]);

  const speed = 100;

  const typeWriter = () => {
    const span = document.getElementById('demo');
    if (span) {
      span.innerHTML = '';
      const word = words[currentWordIndex];
      let j = 0;
      const wordInterval = setInterval(() => {
        if (j < word.length) {
          span.innerHTML += word.charAt(j);
          j++;
        } else {
          clearInterval(wordInterval);
        }
      }, speed);
    }
  };

  return (
    <div>
      <h1
        style={{ color: '#8938E5', fontWeight: 900 }}
        className="fs-3  py-4 text-center text-uppercase"
      >
        Contact us
      </h1>
      <div className="row mx-auto py-5 bg-black">
        <div className="col-md-6 my-auto py-5">
          <h6 className="align-items-end fs-4 mx-auto row text-white text-center">
            <span className="col-md-6 my-1 d-block text-start">
              Connect with ZSI.ai:
              <br /> Reach Out and discover
            </span>
            <span
              id="demo"
              className="animated-gradient col-md-3 py-1 py-2 rounded-1 text-capitalize text-center d-block"
            ></span>
          </h6>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img
            width={600}
            src="https://i.ibb.co/ChQY15L/zsi-contact.png"
            alt=""
          />
        </div>
      </div>

      <div className="col-md-6 mx-auto my-5 px-4">
        <h3 className="my-2 fw-bold">
          Drop us a line about your project at buisness@zsi.ai or via the
          contact form below, and we will contact you within a business day.
        </h3>
        <br />
        <Form
          name="contact_form"
          onFinish={onFinish}
          layout="vertical"
          className="mb-4"
        >
          <Row>
            <Col xs={12} md={6}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your first name!',
                  },
                ]}
              >
                <Input style={{ height: 45 }} />
              </Form.Item>
            </Col>
            <Col xs={12} md={6}>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  { required: true, message: 'Please input your last name!' },
                ]}
              >
                <Input style={{ height: 45 }} />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please input a valid email address!',
                  },
                ]}
              >
                <Input style={{ height: 45 }} />
              </Form.Item>
            </Col>
            <Col xs={12} md={6}>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <Input style={{ height: 45 }} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="inquiryType"
            label="Inquiry Type"
            rules={[
              { required: true, message: 'Please select an inquiry type!' },
            ]}
          >
            <Select style={{ height: 45 }} placeholder="Select an inquiry type">
              <Option value="Project Discussion">Project Discussion</Option>
              <Option value="Job seekers">Job seekers</Option>
              <Option value="Partnership">Partnership</Option>
              <Option value="Training">Training</Option>
            </Select>
          </Form.Item>

          <Form.Item name="coverLetter" label="Message">
            <Input.TextArea placeholder="Message" style={{ height: 150 }} />
          </Form.Item>

          <Form.Item>
            <Checkbox>
              Please be informed that when you click the Send button ZSI will
              process your personal data in accordance with our Privacy notice
              for the purpose of providing you with appropriate information.
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              size="large"
              style={{ width: 200 }}
              type="primary"
              htmlType="submit"
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="row mx-auto my-5  ">
        <div className="col-md-7 p-0 ">
          <img
            height={500}
            loading="lazy"
            src={'https://i.ibb.co/nQ7gMCw/zsi-bg.webp'}
            alt=""
            className="w-100 m-0 d-none d-md-block"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-5 p-0 ">
          <img
            height={500}
            loading="lazy"
            src="https://i.ibb.co/C7Dxjkb/Contact-us-copy.webp"
            alt=""
            className=" m-0 d-none d-md-block"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className="container mx-auto row my-5">
        <div className="col-md-6 my-2 ">
          <h4 className="fs-4 fw-medium mb-3">United States</h4>

          <Card hoverable>
            <img src={us} className="img-fluid" alt="" />

            <div className="animated-gradient px-4 py-3  text-white">
              <h2 className="fs-5 fw-semibold my-1"> New York </h2>
              <h2 className="fs-5 fw-semibold mb-2 mt-1">
                Corporate Headquarters
              </h2>
              <p className="my-1 fw-bold">
                74-09 37TH Avenue, Suite 203B Jackson Heights, <br /> NY 11372
              </p>
              <h2 className="fs-5 fw-semibold my-2"> General Inquiries:</h2>
              <p className="my-1 fw-bold"> Phone: +1 (888) 887 5027</p>
              <h2 className="fs-5 fw-semibold my-2"> Sales Inquiries:</h2>
              <p className="my-1 fw-bold"> Phone: +1 (718) 618 5766</p>
            </div>
          </Card>
        </div>
        <div className="col-md-6 my-2 ">
          <h4 className="fs-4 fw-medium mb-3">Bangladesh</h4>

          <Card hoverable>
            {/* <img src={dhk} className="img-fluid" alt="" /> */}

            <iframe
              className="w-100"
              height={210}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5240787351327!2d90.41420257592945!3d23.835516985502245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700224ff8c1%3A0x87cb3c9d7b69d5fa!2sZsi.ai!5e0!3m2!1sen!2sbd!4v1722334748491!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="animated-gradient px-4 py-3  text-white">
              <h2 className="fs-5 fw-semibold my-1">Dhaka</h2>
              {/* <h2 className="fs-5 fw-semibold mb-2 mt-1 opacity-0">
                Corporate Headquarters
              </h2> */}
              <p className="my-1 fw-bold">
                House 16, 2nd floor, Road 20, Nikunjo-02, <br />
                Khilkhet, Dhaka 1229
              </p>
              <h2 className="fs-5 fw-semibold my-2"> General Inquiries:</h2>
              <p className="my-1 fw-bold"> Phone: +880 1713 017461</p>
              <h2 className="fs-5 fw-semibold my-2"> Sales Inquiries:</h2>
              <p className="my-1 fw-bold"> Phone: +880 1722-597565</p>
              <h2 className="fs-5 fw-semibold mb-2 mt-1 opacity-0">Cs</h2>
            </div>
          </Card>
        </div>
      </div>

      <div className=" container social_section my-5">
        <div className="text-center mb-4">
          <h2 style={{ fontSize: 35, fontWeight: 700 }}>
            Let's Keep In Touch{' '}
          </h2>
          <h2 style={{ fontSize: 18, fontWeight: 600 }}>
            {' '}
            Join ZSI.Ai in social networks and stay tuned.
          </h2>
        </div>

        <div className="wrapper mb-5">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100094733899634&mibextid=JRoKGi"
          >
            <div className="bg-ico" id="facebook">
              <i className="fab fa-facebook social  facebook fa-3x" />
            </div>
          </a>
          {/* <i class="fa-brands fa-linkedin"></i> */}
          {/* <a target='_blank' href="#">
            <div className="bg-ico" id="pinterest">
              <i className="fab fa-pinterest social  pinterest fa-3x" />
            </div>
          </a> */}
          <a
            target="_blank"
            href="http://www.linkedin.com/in/mustafizur-moosa-a468b2189"
          >
            <div className="bg-ico" id="twitter">
              <i className="fab fa-brands fa-linkedin social  twitter fa-3x" />
            </div>
          </a>
          <a target="_blank" href="https://www.twitter.com/zsi_ai">
            <div className="bg-ico" id="twitter">
              <i className="fab fa-twitter social  twitter fa-3x" />
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/zsi_ai?igsh=MTNwdWt1YW80cHVo&utm_source=qr"
          >
            <div className="bg-ico" id="instagram">
              <i className="fab fa-instagram social  instagram fa-3x" />
            </div>
          </a>
          {/* <a target='_blank' href="#">
            <div className="bg-ico" id="tumblr">
              <i className="fab fa-tumblr social  tumblr fa-3x" />
            </div>
          </a> */}
          <a target="_blank" href="https://wa.link/cz3ulu">
            <div className="bg-ico" id="whatsapp">
              <i className="fab fa-whatsapp social  whatsapp fa-3x" />
            </div>
          </a>
          <a target="_blank" href="https://www.youtube.com/@zsi-ai">
            <div className="bg-ico" id="youtube">
              <i className="fab fa-youtube social  youtube fa-3x" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
