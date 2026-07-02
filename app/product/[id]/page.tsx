import { supabase } from "@/lib/supabase";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  in_stock: boolean;
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold">المنتج غير موجود</h1>

        <Link
          href="/"
          className="text-[#4A7C59] mt-6 inline-block"
        >
          العودة للرئيسية
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.name}
          className="rounded-3xl w-full"
        />

        <div>
          <h1 className="text-4xl font-bold text-[#4A7C59]">
            {product.name}
          </h1>

          <p className="text-gray-600 mt-6">
            {product.description}
          </p>

          <p className="text-3xl font-bold text-[#4A7C59] mt-8">
            {product.price} جنيه
          </p>

          <p className="mt-4">
            التصنيف: {product.category}
          </p>

          <p className="mt-2">
            الحالة:
            {product.in_stock ? " متوفر" : " غير متوفر"}
          </p>

          <a
            href="https://wa.me/201026439597"
            target="_blank"
            className="inline-block mt-8 bg-[#4A7C59] text-white px-8 py-4 rounded-xl"
          >
            اطلب الآن عبر واتساب
          </a>
        </div>

      </div>
    </section>
  );
}
