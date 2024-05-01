import { Link } from "react-router-dom";

const Contact = () => {
  const email = "support@verafied.tech";
  return (
    <div>
      <Link to={`mailto:${email}`} className="text-white">
        Contact Us
      </Link>
    </div>
  );
};

export default Contact;
