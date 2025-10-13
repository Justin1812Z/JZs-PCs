import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Contact Us</h2>
          <p>
            Want a custom build, need help choosing parts, or have questions about
            our warranty and shipping? We're here to help. Book an appointment to
            discuss your needs, get a quote, or schedule a repair.
          </p>
          <p className="contact-cta-row">
            <a className="contact-link" href="https://calendar.app.google/66tLJVs1HmYPazFMA" target="_blank" rel="noopener noreferrer">Make an appointment</a>
            <a className="contact-email" href="mailto:info@jzs-pcs.com">info@jzs-pcs.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
