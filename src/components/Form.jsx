import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Contact = ({ linkStyle, containerStyle }) => {
  const email = "support@verafied.tech";
  return (
    <form
      id="contact"
      className={`${containerStyle} justify-center items-center`}>
      <Link to={`mailto:${email}`} className={`text-white ${linkStyle}`}>
        Contact Us
      </Link>
    </form>
  );
};

export default Contact;
