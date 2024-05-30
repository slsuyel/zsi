import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact-page" data-aos="fade-up" data-aos-duration="2000">
      <section className="contact-section">
        <div className="section-header">
          <div className="contact-container">
            <h2>Contact Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="contact-container">
          <div className="row">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-home" />
                </div>
                <div className="contact-info-content">
                  <h4>United States Office</h4>
                  <p>
                    74-09 37TH Avenue, Suite 203B,
                    <br /> Jackson Heights, NY 11372
                  </p>
                  <h4>General Inquiries:</h4>
                  <p>Phone: +1 (888) 887 5027</p>
                  <h4>Sales Inquiries:</h4>
                  <p>Phone: +1 (718) 618 5766</p>
                  <p>Email: sales@zsi.ai</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-home" />
                </div>
                <div className="contact-info-content">
                  <h4>Bangladesh Office</h4>
                  <p>
                    House 16, 2nd floor, Road 20,
                    <br /> Nikunjo-02, Khilkhet, Dhaka-1229, Bangladesh
                  </p>
                  <h4>General Inquiries:</h4>
                  <p>Phone: +880 1713 017461</p>
                  <h4>Sales Inquiries:</h4>
                  <p>Phone: +880 1722-597565</p>
                  <p>Email: salesbd@zsi.ai</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form id="contact-form">
                <h2>Send Message</h2>
                <div className="input-box">
                  <input type="text" />
                  <span>Full Name</span>
                </div>
                <div className="input-box">
                  <input type="email" />
                  <span>Email</span>
                </div>
                <div className="input-box">
                  <textarea required defaultValue={""} />
                  <span>Type your Message...</span>
                </div>
                <div className="input-box">
                  <input type="submit" defaultValue="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
