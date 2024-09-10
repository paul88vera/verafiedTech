import { Form } from "react-router-dom";

import FormGroup from "./FormGroup";

// eslint-disable-next-line react/prop-types
export default function Contact({ containerStyle, isSubmitting, errors = {} }) {
  // const email = "support@verafied.tech";
  return (
    // <form
    //   id="contact"
    //   className={`${containerStyle} justify-center items-center snap-center`}>
    //   <Link to={`mailto:${email}`} className={`text-white ${linkStyle}`}>
    //     Contact Us
    //   </Link>
    // </form>
    <Form
      method="post"
      className={`${containerStyle} form justify-center items-center snap-center w-full bg-slate-900`}
      id="contact">
      <div className="form-container">
        <h3>
          Would you like to receive a quote? Give a brief description of what
          services you are looking for and we will contact you as soon as we are
          able.
        </h3>
        <div className="form-row">
          <FormGroup errorMessage={errors.name}>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Full Name"
            />
          </FormGroup>
        </div>
        <div className="form-row">
          <FormGroup errorMessage={errors.email}>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup errorMessage={errors.tel}>
            <input
              type="tel"
              name="tel"
              id="tel"
              autoComplete="tel"
              placeholder="Phone"
            />
          </FormGroup>
          <FormGroup errorMessage={errors.message}>
            <textarea
              name="message"
              id="message"
              rows={10}
              placeholder="Give a brief description of what services you are looking for."></textarea>
          </FormGroup>
        </div>

        <div className="form-btn-container">
          <button className="btn submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </div>
    </Form>
  );
}

export function postFormValidator({ name, email, tel, message }) {
  const errors = {};
  if (name === "") {
    errors.name = "Required";
  }
  if (email === "") {
    errors.email = "Required";
  }
  if (tel === "") {
    errors.tel = "Required";
  }
  if (message === "") {
    errors.message = "Required";
  }

  return errors;
}
