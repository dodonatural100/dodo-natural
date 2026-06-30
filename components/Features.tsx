export default function Features() {
  const features = [
    {
      title: "🌿 مكونات طبيعية",
      text: "منتجات مصنوعة من مكونات طبيعية مختارة بعناية."
    },
    {
      title: "✨ جودة مضمونة",
      text: "نختار أفضل الخامات لنقدم أفضل نتيجة."
    },
    {
      title: "🚚 توصيل سريع",
      text: "نوصل طلبك بأسرع وقت مع تغليف آمن."
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#4A7C59] mb-12">
          لماذا DODO NATURAL؟
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
