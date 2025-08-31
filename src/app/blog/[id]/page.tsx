"use client";
import { useParams } from "next/navigation";
export default function BlogPost() {
  const params = useParams();
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">部落格文章 {params.id}</h1>
      <p>這裡是部落格文章內容範例。</p>
    </main>
  );
}
