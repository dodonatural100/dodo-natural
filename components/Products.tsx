import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "زيت إكليل الجبل",
    price: "250 جنيه",
    badge: "الأكثر مبيعًا",
    image: "https://placehold.co/400x400?text=Rosemary+Oil",
  },
  {
    id: 2,
    name: "سيروم الشعر",
    price: "320 جنيه",
    badge: "جديد",
    image: "https://placehold.co/400x400?text=Hair+Serum",
  },
  {
    id: 3,
    name: "غسول طبيعي",
    price: "180 جنيه",
    badge: "خصم",
    image: "https://placehold.co/400x400?text=Face+Wash",
  },
];

export default function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#4A7C59] mb-12">
          المنتجات المميزة
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden rounded-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />

              <CardContent className="p-6">
                <Badge>{product.badge}</Badge>

                <h3 className="text-xl font-bold mt-4">
                  {product.name}
                </h3>

                <p className="text-[#4A7C59] font-bold text-lg mt-2">
                  {product.price}
                </p>

                <a
                  href="https://wa.me/201026439597"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6 text-center bg-[#4A7C59] text-white py-3 rounded-xl hover:bg-[#355a40]"
                >
                  اطلب عبر واتساب
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
