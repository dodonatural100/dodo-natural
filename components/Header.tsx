export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-[#4A7C59]">
          DODO NATURAL
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="#">الرئيسية</a>
          <a href="#">المنتجات</a>
          <a href="#">العروض</a>
          <a href="#">من نحن</a>
          <a href="#">تواصل</a>
        </nav>

        <a
          href="https://wa.me/201026439597"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4A7C59] text-white px-5 py-2 rounded-xl hover:bg-[#3b6548] transition"
        >
          واتساب
        </a>

      </div>
    </header>
  );
}
