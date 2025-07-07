const Branches = () => {
  return (
    <section className="py-16 px-4 bg-pink-50 text-center">
      <h2 className="text-3xl font-semibold mb-6">Our Location</h2>
      <p className="mb-4 text-lg">
        Shop No. 10, Tower No. 8, Blue Ridge Township, Hinjewadi, Pune <br />
      </p>
      <iframe
        title="Google Maps"
        className="mx-auto w-full max-w-2xl h-64 rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d236.37018038404332!2d73.7370999!3d18.577515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbe5482f88e9%3A0x2665d08ed13023d3!2sGolden%20Touch%20Beauty%20Salon!5e0!3m2!1sen!2sin!4v1751482822805!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Branches;
