export default function Categories() {
  const categories = [
    { icon: "💇‍♀️", title: "العناية بالشعر" },
    { icon: "🌸", title: "العناية بالبشرة" },
    { icon: "🧴", title: "الزيوت الطبيعية" },
    { icon: "🎁", title: "العروض" },
  ];

  return (
    <section className="bg-[#F9F6F1] py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#4A7C59] mb-12">
          تسوق حسب القسم
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:scale-105 hover:shadow-xl transition cursor-pointer"
            >
              <div className="text-5xl mb-4">
                {category.icon}
              </div>

              <h3 className="font-bold text-lg">
                {category.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
