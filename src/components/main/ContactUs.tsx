const ContactUs = () => {
  return (
    <div id="contact" className="mt-20">
      <section className="flex flex-col items-center justify-center gap-4">
        <p className="font-mono text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">
          <span className="gradient-text">Get in Touch</span> With Us
        </p>
        <p className="w-[90%] text-center text-base sm:w-[70%] md:text-lg xl:text-xl 2xl:text-2xl">
          Have questions? Our team is here to help!
        </p>
      </section>
      <section className="mt-10 flex w-full items-center justify-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
          <p className="mb-2">Name</p>
          <input
            type="text"
            placeholder="Enter Name"
            className="border-border mb-6 w-full rounded-xl border px-4 py-3 focus:outline-none"
          />
          <p className="mb-2">Phone</p>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="border-border mb-6 w-full rounded-xl border px-4 py-3 focus:outline-none"
          />
          <p className="mb-2">Email</p>
          <input
            type="text"
            placeholder="Enter Email"
            className="border-border mb-6 w-full rounded-xl border px-4 py-3 focus:outline-none"
          />
          <p className="mb-2">Message</p>
          <textarea
            placeholder="Enter your query"
            rows={5}
            className="border-border w-full rounded-xl border px-4 py-3 focus:outline-none"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
