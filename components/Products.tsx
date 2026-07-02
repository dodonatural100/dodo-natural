"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";

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

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*");

      if (error) {
        console.error("Supabase Error:", error);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    }

    getProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#4A7C59]">
            جاري تحميل المنتجات...
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#4A7C59] mb-12">
          المنتجات المميزة
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">
            لا توجد منتجات حتى الآن.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover cursor-pointer"
                  />
                </Link>

                <CardContent className="p-6">
                  {product.featured && (
                    <Badge>الأكثر مبيعًا</Badge>
                  )}

                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-xl font-bold mt-4 hover:text-[#4A7C59] cursor-pointer transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-gray-600 mt-2">
                    {product.description}
                  </p>

                  <p className="text-[#4A7C59] font-bold text-lg mt-4">
                    {product.price} جنيه
                  </p>

                  <a
                    href="https://wa.me/201026439597"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-6 text-center bg-[#4A7C59] text-white py-3 rounded-xl hover:bg-[#355a40] transition-colors"
                  >
                    اطلب عبر واتساب
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
