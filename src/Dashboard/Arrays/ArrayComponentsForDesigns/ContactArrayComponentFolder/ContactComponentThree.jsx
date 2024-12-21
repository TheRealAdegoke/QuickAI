import React from "react";

const ContactComponentThree = () => {
  return (
    <>
      <section className="my-32 text-black w-[90%] max-w-[1000px] max-lg:max-w-[600px] mx-auto">
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
      </section>
    </>
  );
};

export default ContactComponentThree;
