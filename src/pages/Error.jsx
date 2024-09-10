// eslint-disable-next-line react/prop-types
export default function Error() {
  return (
    <div
      className={`flex flex-col justify-center h-[90svh] w-full align-middle text-center items-center`}>
      <h3 className="font-regular text-[2rem]">
        404 - This is not the page you are looking for...
      </h3>
      <br />
      <a href="/" className="py-8 max-w-[100px] align-middle">
        Go Back
      </a>
    </div>
  );
}
