import { useState } from "react";
import successIcon from "./img/success.svg";

const App = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  console.log(setSuccess, setError);
  false;
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const borderStyles = `border border-${
    error ? "red" : "mediumGrey"
  } rounded-md p-2`;

  const borderStylesRadio = `border ${error? "border-red":"border-mediumGrey"} rounded-md p-2 sm:w-1/2 borderStyles rounded-md p-2 mb-1 sm:mb-0`;

  return (
    <>
      <section className="w-full min-h-screen relative bg-lightGreen flex justify-center items-center">
        <div className="bg-white sm:w-1/2 w-[85%] rounded-lg p-8">
          <h3 className="text-green text-xl">Contact Us</h3>

          <form className="mt-2" onSubmit={handleSubmit}>
            <div id="names" className="flex sm:flex-row flex-col sm:space-x-3">
              <div className="flex flex-col sm:w-1/2">
                <label htmlFor="fname" className="text-mediumGrey">
                  First Name *
                </label>
                <input
                  className={borderStyles}
                  type="text"
                  name="fname"
                  id="fname"
                />

                {error && (
                  <p className="text-xs text-red pt-2">
                    This field is required
                  </p>
                )}
              </div>
              <div className="flex flex-col  sm:w-1/2">
                <label htmlFor="lname" className="text-mediumGrey">
                  Last Name *
                </label>
                <input
                  className={borderStyles}
                  type="text"
                  name="lname"
                  id="lname"
                />

                {error && (
                  <p className="text-xs text-red pt-2">
                    This field is required
                  </p>
                )}
              </div>
            </div>

            <div className="w-full flex flex-col mt-4">
              <label className="text-mediumGrey" htmlFor="email">
                Email *
              </label>
              <input
                className={borderStyles}
                type="email"
                name="email"
                id="email"
              />

              {error && (
                <p className="text-xs text-red pt-2">
                  Please enter a valid email address
                </p>
              )}
            </div>

            <div id="names" className="mt-4">
              <label htmlFor="query" className="text-mediumGrey">
                Query Type *
              </label>
              <div className="sm:space-x-3 flex sm:flex-row flex-col">
                <div className={borderStylesRadio}>
                  <input type="radio" name="enquiry" id="query" />
                  <label className="text-mediumGrey ml-2" htmlFor="">
                    General enquiry
                  </label>
                </div>

                <div className={borderStylesRadio}>
                  <input type="radio" name="enquiry" id="query" />
                  <label className="text-mediumGrey ml-2" htmlFor="">
                    Support Request
                  </label>
                </div>
              </div>
              {error && (
                <p className="text-xs text-red pt-2">
                  Please select a query type
                </p>
              )}
            </div>

            <div id="names" className="mt-4 w-full flex flex-col">
              <label htmlFor="message" className="text-mediumGrey">
                Message *
              </label>

              <input
                className={borderStyles}
                type="text"
                name="message"
                id="message"
              />

              {error && (
                <p className="text-xs text-red pt-2">This field is required</p>
              )}
            </div>

            <>
              <div className="flex space-x-4 mt-4">
                <input type="checkbox" name="consent" id="checkbox" />
                <label htmlFor="checkbox" className="text-mediumGrey text-xs">
                  I consent being contacted by the team *
                </label>
              </div>

              {error && (
                <p className="text-xs text-red pb-2">
                  To submit this form, please consent to being contacted.
                </p>
              )}
            </>

            <div id="submit">
              <button
                type="submit"
                className="w-full p-2 bg-green rounded-md mt-2 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {success && (
        <div className="absolute w-full top-0 flex justify-center">
          <Message />
        </div>
      )}
    </>
  );
};

const Message = () => {
  return (
    <div className="bg-darkGrey text-white p-3 rounded-md text-xs">
      <div className="flex place-items-center space-x-3">
        <img src={successIcon} alt="" />
        <p className="font-bold">Message sent</p>
      </div>
      <p className=" mt-1">
        {`Thanks for completing the form. We'll be in touch soon.`}
      </p>
    </div>
  );
};

export default App;
