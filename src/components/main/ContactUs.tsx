const ContactUs = () => {
  return (
    <div id="contact" className="mt-20">
      <section className="mb-8 space-y-4 text-center">
        <p className="font-mono text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">
          <span className="gradient-text">Get in Touch</span> With Us
        </p>
        <p className="w-full text-base md:text-lg xl:text-xl 2xl:text-2xl">
          Have questions or need assistance? Our team is here to help! Reach out to us anytime.
        </p>
      </section>
      <section className="mb-10 flex w-full items-center justify-center text-lg">
        <div className="w-7xl">
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter Name"
            className="border-border mb-6 w-full rounded-xl border px-4 py-3"
          />
          <p>Phone</p>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="border-border mb-6 w-full rounded-xl border px-4 py-3"
          />
          <p>Email</p>
          <input
            type="text"
            placeholder="Enter Email"
            className="border-border mb-6 w-full rounded-xl border px-4 py-3"
          />
          <p>Message</p>
          <textarea
            placeholder="Enter your query"
            rows={5}
            className="border-border w-full rounded-xl border px-4 py-3"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
