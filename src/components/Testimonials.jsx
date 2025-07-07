const testimonials = [
  {
    name: "Isha",
    feedback: "Very good place, stylists really do know what they are doing. Good experience",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Prithvi",
    feedback: "Service was great, would recommend for others too. Great ambience and staff.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Jasmeet Kaur",
    feedback: "Excellent facial done by Supriya, very well trained lady, excellent quality of work, amazing experience, great quality of products used on skin. Must go, just loved the work. ",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="text-yellow-500 mb-2">
              {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
            </p>
            <p className="text-gray-600 text-sm">{t.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
