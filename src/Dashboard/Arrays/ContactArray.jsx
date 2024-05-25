export const contactComponent = ({ text }) => {
  return [
    <section className="my-24 text-black w-[90%] max-w-[1000px] max-lg:max-w-[600px] mx-auto flex max-lg:flex-col justify-between items-center">
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
        <h1 className="text-3xl font-semibold mb-5">{text.contactHeader[0]}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates id
          dolor ratione, nesciunt soluta dolorem reiciendis aliquid.
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
    </section>,
    <section className="my-24 text-black w-[90%] max-w-[1000px] max-lg:max-w-[600px] mx-auto flex max-lg:flex-col-reverse flex-row-reverse items-center">
      <div className="w-[50%] h-[600px] max-lg:w-full bg-[#d9d9d9]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126082.63117777245!2d7.4985258706102815!3d9.056264578816574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1716136585984!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "0" }}
          className="w-[95%] mx-auto py-5 h-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="w-[50%] h-[600px] max-lg:w-full bg-[#292f33] text-white p-5">
        <h1 className="text-3xl font-semibold mb-5">{text.contactHeader[0]}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates id
          dolor ratione, nesciunt soluta dolorem reiciendis aliquid.
        </p>

        <form action="" className="my-8 text-black">
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
            className="px-8 py-2 bg-[#e7333b] text-white font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </section>,
    <section className="my-24 text-black w-[90%] max-w-[1000px] max-lg:max-w-[600px] mx-auto">
      <div className="h-[600px] w-full bg-white rounded-xl shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126082.63117777245!2d7.4985258706102815!3d9.056264578816574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1716136585984!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "0" }}
          className="w-[95%] mx-auto py-5 h-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>,
    <section className="my-24 text-black w-[90%] max-w-[800px] max-lg:max-w-[600px] mx-auto">
      <div className="w-full bg-white text-balck p-5  rounded-xl shadow-2xl">
        <h1 className="text-3xl font-semibold mb-5">{text.contactHeader[0]}</h1>

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
    </section>,
    <section className="my-24 text-black w-[90%] max-w-[1000px] max-lg:max-w-[600px] mx-auto flex max-lg:flex-col-reverse flex-row-reverse items-center gap-5">
      <div className="w-[50%] h-[600px] max-lg:w-full flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126082.63117777245!2d7.4985258706102815!3d9.056264578816574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1716136585984!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "0" }}
          className="w-[95%] mx-auto py-5 h-full lg:w-[400px] lg:h-[420px] lg:rounded-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="w-[50%] h-[600px] max-lg:w-full bg-white text-black p-5 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-semibold mb-5">{text.contactHeader[0]}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates id
          dolor ratione, nesciunt soluta dolorem reiciendis aliquid.
        </p>

        <form action="" className="my-8 text-black">
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
            className="px-8 py-2 bg-black text-white font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </section>,
  ];
};
