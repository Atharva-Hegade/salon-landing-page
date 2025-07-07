
const Gallery = () => {
  const images = [
    'assets/salon1.jpg',
    'assets/salon2.jpg',
    'assets/salon3.jpg',
    'assets/salon4.jpg',
    'assets/salon5.jpg',
    'assets/salon6.jpg',
  ];

  return (
    <section id="gallery" className="py-16 px-4 bg-pink-50 text-center">
      <h2 className="text-3xl font-semibold mb-8">Salon Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`Salon view ${i + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;