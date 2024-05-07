import { Fragment } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Contact = ({ linkStyle }) => {
  const email = "support@verafied.tech";
  return (
    <Fragment>
      <Link to={`mailto:${email}`} className={`text-white ${linkStyle}`}>
        Contact Us
      </Link>
    </Fragment>
  );
};

export default Contact;
