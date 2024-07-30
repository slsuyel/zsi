import { Form, Input, Button, Checkbox, Select } from 'antd';
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

const ContactForm = () => {
  const onFinish = (values: FormValues) => {
    console.log('Received values:', values);
  };

  return (
    <div className="container my-5">
      <div className="row mx-auto">
        <div className="col-md-6">
          <h2 className="fs-1 fw-bold mb-4">Contact us</h2>
          <div className="contact-info">
            <div className="mb-2">
              <strong className="fs-4 fw-medium">Join our team</strong>
              <p>
                <a href="mailto:team@zsi.ai">team@zsi.ai</a>
              </p>
            </div>
            <div className="mb-2">
              <strong className="fs-4 fw-medium">Become a partner</strong>
              <p>
                <a href="mailto:partner@zsi.ai">partner@zsi.ai</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
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
                  <Input style={{ height: 40 }} />
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
                  <Input style={{ height: 40 }} />
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
                  <Input style={{ height: 40 }} />
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
                  <Input style={{ height: 40 }} />
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
              <Select
                style={{ height: 40 }}
                placeholder="Select an inquiry type"
              >
                <Option value="Job seekers">Job seekers</Option>
                <Option value="Partnership">Partnership</Option>
                <Option value="Training">Training</Option>
              </Select>
            </Form.Item>

            <Form.Item name="coverLetter" label="Cover Letter">
              <Input.TextArea
                placeholder="Cover Letter"
                style={{ height: 150 }}
              />
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
                Send
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
