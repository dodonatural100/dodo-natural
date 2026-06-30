export default function Hero() {
  return (
    <main className="min-h-screen bg-[#F9F6F1]">
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-6xl font-bold text-[#4A7C59]">
          DODO NATURAL
        </h1>

        <p className="mt-4 text-2xl text-gray-700">
          جمالك يبدأ من الطبيعة 🌿
        </p>

        <p className="mt-6 max-w-2xl text-gray-600 leading-8">
          منتجات طبيعية للعناية بالشعر والبشرة، بجودة عالية ومكونات مختارة بعناية
          لتمنحك أفضل تجربة.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-[#4A7C59] text-white px-8 py-4 rounded-xl hover:bg-[#3b6548] transition">
            تسوق الآن
          </button>

          <button className="border-2 border-[#4A7C59] text-[#4A7C59] px-8 py-4 rounded-xl hover:bg-[#4A7C59] hover:text-white transition">
            واتساب
          </button>
        </div>
      </section>
    </main>
  );
}
