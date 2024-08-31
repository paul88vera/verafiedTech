const Footer = () => {
  // Collects current year
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="flex w-full text-center justify-center align-middle p-4 border-t-[1px] border-[--accent-green-color]">
      <p>
        © {year} created by
        <a
          href="https://paulvera.com"
          target="_blank"
          rel="noopener noreferrer">
          {" "}
          Paul Vera
        </a>
        <br />
        from VERAfied Technologies
      </p>
    </div>
  );
};

export default Footer;
