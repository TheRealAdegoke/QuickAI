import React from "react";

const ContactComponentFour = ({ text }) => {
  return (
    <>
      <section className="my-32 text-black w-[90%] max-w-[800px] max-lg:max-w-[600px] mx-auto">
        <div className="w-full bg-white text-black p-5  rounded-xl shadow-2xl">
          <h1 className="text-3xl font-semibold mb-5">
            {text.contactHeader[0]}
          </h1>

          <form action="" className="my-8 text-black">
            <input
              type="text"
              className="border-solid border-[1px] border-black block w-full h-[40px] pl-2 mb-3 bg-transparent border-t-0 border-l-0 border-r-0 outline-none"
              placeholder="Enter your name"
            />
            <input
              type="text"
              className="border-solid border-[1px] border-black block w-full h-[40px] pl-2 mb-3 bg-transparent border-t-0 border-l-0 border-r-0 outline-none"
              placeholder="Enter your email"
            />
            <textarea
              className="border-solid border-[1px] border-black block w-full pl-2 mb-3 pt-2 bg-transparent border-t-0 border-l-0 border-r-0 outline-none"
              placeholder="Enter your message"
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="px-8 py-2 bg-black text-white font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactComponentFour;
