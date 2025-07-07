const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
      <p className="mb-2">📞 Phone: <a className="text-pink-600 font-medium" href="tel:+91-6384482534">+91 6384482534</a></p>
      <p className="mb-2">📍 Visit us during 10:30 AM – 8:30 PM</p>
      <p className="mb-4">📧 Email: <a className="text-pink-600 font-medium" href="mailto:info@goldentouchsalon.in">info@goldentouchsalon.in</a></p>
      
      <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
  <button className="bg-pink-500 text-white px-6 py-2 mt-4 rounded-full hover:bg-pink-600 transition">Contact Us</button>
</a>
    </section>
  );
};

export default Contact;
