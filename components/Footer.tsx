export default function Footer() {
  return (
    <footer className="bg-[#2F4F3E] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold">
          DODO NATURAL
        </h2>

        <p className="mt-3 text-gray-300">
          جمالك يبدأ من الطبيعة 🌿
        </p>

        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://wa.me/201026439597"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300"
          >
            واتساب
          </a>

          <a
            href="https://www.facebook.com/Natualproducts100/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300"
          >
            فيسبوك
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} DODO NATURAL. جميع الحقوق محفوظة.
        </p>

      </div>
    </footer>
  );
}
