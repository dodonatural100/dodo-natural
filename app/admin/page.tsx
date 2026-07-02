"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  async function addProduct(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.from("products").insert([
      {
        name,
        description,
        price: Number(price),
        image,
        category,
        featured: true,
        in_stock: true,
      },
    ]);

    if (error) {
      alert("حدث خطأ");
      console.log(error);
      return;
    }

    alert("تمت إضافة المنتج بنجاح ✅");

    setName("");
    setDescription("");
    setPrice("");
    setImage("");
    setCategory("");
  }

  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-[#4A7C59] mb-10">
        لوحة التحكم
      </h1>

      <div className="bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-semibold mb-6">
          إضافة منتج جديد
        </h2>

        <form onSubmit={addProduct} className="grid gap-4">

          <input
            type="text"
            placeholder="اسم المنتج"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-xl p-3"
            required
          />

          <textarea
            placeholder="وصف المنتج"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-xl p-3"
            required
          />

          <input
            type="number"
            placeholder="السعر"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded-xl p-3"
            required
          />

          <input
            type="text"
            placeholder="رابط الصورة"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border rounded-xl p-3"
            required
          />

          <input
            type="text"
            placeholder="التصنيف"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-xl p-3"
            required
          />

          <button
            type="submit"
            className="bg-[#4A7C59] text-white py-3 rounded-xl hover:bg-[#355a40]"
          >
            إضافة المنتج
          </button>

        </form>
      </div>
    </main>
  );
}
