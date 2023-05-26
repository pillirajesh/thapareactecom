import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h4>Feel Free To Contact</h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.755807076232!2d88.34870107480658!3d22.73731597937482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b1ea939a2f5%3A0xf04353dc5898ef13!2sALCOVE%20NEW%20KOLKATA%20-%20Home%20by%20the%20Ganges!5e0!3m2!1sen!2sin!4v1685084521087!5m2!1sen!2sin"
        width="90%"
        height="300"
        style={{ border: "0px", borderRadius: "20px", marginBottom: "15px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="google"
      ></iframe>
      <div className="forms-container">
        <form action="https://formspree.io/f/mgebbldg" method="POST">
          <input
            type="text"
            placeholder="Contact Name"
            name="Name"
            required
            autoComplete="off"
            style={{ marginBottom: "10px", fontSize: "12px", padding: "5px" }}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            name="Email"
            required
            autoComplete="off"
            style={{ marginBottom: "10px", fontSize: "12px", padding: "5px" }}
          />
          <br />

          <textarea
            placeholder="Message"
            name="Message"
            cols="30"
            rows="5"
            required
            autoComplete="off"
            style={{ marginBottom: "10px", fontSize: "15px", padding: "5px" }}
          ></textarea>
          <br />

          <button
            type="submit"
            className="send-button"
            style={{ marginBottom: "20px" }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
