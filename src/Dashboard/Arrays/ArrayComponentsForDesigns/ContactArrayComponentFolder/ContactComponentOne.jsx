import React from "react";

const ContactComponentOne = ({ text }) => {
  return (
    <>
      <section className="my-32 my text-black w-[90%] max-w-[1000px] max-lg:max-w-[600px] mx-auto flex max-lg:flex-col justify-between items-center">
        <div className="mb-10 w-[45%] max-lg:w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126082.63117777245!2d7.4985258706102815!3d9.056264578816574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1716136585984!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: "0" }}
            className="w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-[45%] max-lg:w-full">
          <h1 className="text-3xl font-semibold mb-5">
            {text.contactHeader[0]}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            id dolor ratione, nesciunt soluta dolorem reiciendis aliquid.
          </p>

          <form action="" className="my-8">
            <input
              type="text"
              className="border-solid border-[1px] border-black block w-full h-[40px] pl-2 rounded-md mb-3"
              placeholder="Enter your name"
            />
            <input
              type="text"
              className="border-solid border-[1px] border-black block w-full h-[40px] pl-2 rounded-md mb-3"
              placeholder="Enter your email"
            />
            <textarea
              className="border-solid border-[1px] border-black block w-full pl-2 rounded-md mb-3 pt-2"
              placeholder="Enter your message"
              rows={10}
            ></textarea>
            <button
              type="submit"
              className="border-solid border-[2px] border-black px-8 py-2"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactComponentOne;
