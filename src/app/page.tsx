

"use client";
import Link from "next/link";
import { siteData } from "./siteData";
import React, { useState } from "react";

const menuItems = [
  { href: "#about", label: "關於我們" },
  { href: "#course", label: "滑雪課程" },
  { href: "#skiArea", label: "認識雪場" },
  { href: "#faq", label: "常見問題" },
  { href: "#blog", label: "部落格" },
  { href: "#contact", label: "聯絡我們" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900 p-0 sm:p-0 relative">
      {/* Hero Section */}
      <section className="w-full h-[320px] sm:h-[420px] flex flex-col justify-center items-center bg-gradient-to-b from-blue-100/80 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
          {/* 雪地漸層與圓形雪花裝飾 */}
          <div className="absolute left-1/4 top-10 w-32 h-32 bg-white/60 rounded-full blur-2xl" />
          <div className="absolute right-1/4 top-24 w-24 h-24 bg-blue-100/60 rounded-full blur-2xl" />
          <div className="absolute left-1/2 bottom-0 w-96 h-32 bg-white/80 rounded-b-full blur-2xl" />
        </div>
  <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-900 drop-shadow mb-4 z-10">SnowShow</h1>
  <p className="text-lg sm:text-2xl text-blue-800 font-medium z-10">專業滑雪教學、課程報名、雪場介紹與裝備資訊平台。</p>
      </section>

      {/* Hamburger Icon */}
      <div
        className="hamburger mx-auto mt-4 mb-4"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="開啟功能表"
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setMenuOpen(v => !v); }}
        role="button"
      >
        <div className="hamburger-bar" />
        <div className="hamburger-bar" />
        <div className="hamburger-bar" />
      </div>
      {/* Menu */}
      <nav className={`menu max-w-3xl mx-auto mb-8${menuOpen ? " open" : ""}`}>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 text-center font-semibold shadow-sm border border-blue-100"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* 特色區塊 */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 py-8">
        <div className="rounded-2xl bg-white/80 shadow p-6 flex flex-col items-center border border-blue-100">
          <h2 className="text-xl font-bold text-blue-900 mb-2">專業滑雪教練團隊</h2>
          <ul className="text-gray-700 text-base list-disc pl-5">
            {siteData.about.team.map((coach) => (
              <li key={coach.name}><b>{coach.name}</b>：{coach.desc}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white/80 shadow p-6 flex flex-col items-center border border-blue-100">
          <h2 className="text-xl font-bold text-blue-900 mb-2">多元滑雪課程</h2>
          <ul className="text-gray-700 text-base">
            {siteData.course.price.map((item) => (
              <li key={item.type}>{item.type}：{item.price}</li>
            ))}
          </ul>
          <a href={siteData.course.signupUrl} target="_blank" rel="noopener" className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">課程報名</a>
        </div>
      </section>

      <main className="max-w-3xl mx-auto space-y-12 px-4">
        {/* 關於我們 */}
        <section id="about">
          <h2 className="text-2xl font-bold mb-2">關於我們</h2>
          <ul className="list-disc pl-5 mb-2">
            {siteData.about.team.map((coach) => (
              <li key={coach.name} className="mb-1"><b>{coach.name}</b>：{coach.desc}</li>
            ))}
          </ul>
        </section>

        {/* 滑雪課程 */}
        <section id="course">
          <h2 className="text-2xl font-bold mb-2">滑雪課程</h2>
          <p className="mb-2">{siteData.course.intro}</p>
          <ul className="mb-2">
            {siteData.course.price.map((item) => (
              <li key={item.type}>{item.type}：{item.price}</li>
            ))}
          </ul>
          <a href={siteData.course.signupUrl} target="_blank" rel="noopener" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">課程報名</a>
        </section>

        {/* 認識雪場 */}
        <section id="skiArea">
          <h2 className="text-2xl font-bold mb-2">認識雪場</h2>
          <div className="mb-2">
            <b>{siteData.skiArea.yuzawa.name}</b>：{siteData.skiArea.yuzawa.desc}
          </div>
        </section>

        {/* 常見問題 */}
        <section id="faq">
          <h2 className="text-2xl font-bold mb-2">常見問題</h2>
          <ul className="list-disc pl-5">
            {siteData.faq.map((item, idx) => (
              <li key={idx}><b>{item.q}</b>：{item.a}</li>
            ))}
          </ul>
        </section>

        {/* 部落格 */}
        <section id="blog">
          <h2 className="text-2xl font-bold mb-2">部落格</h2>
          <ul className="space-y-2">
            {siteData.blog.map((post, idx) => (
              <li key={idx} className="border rounded p-3 bg-gray-50">
                <div className="font-semibold">{post.title}</div>
                <div className="text-xs text-gray-500 mb-1">{post.date}</div>
                <div className="text-gray-700">{post.summary}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* 聯絡我們 */}
        <section id="contact">
          <h2 className="text-2xl font-bold mb-2">聯絡我們</h2>
          <div className="mb-1">Email：<a href="mailto:{siteData.contact.email}" className="text-blue-600 underline">{siteData.contact.email}</a></div>
          <div>LINE：<a href={siteData.contact.line} target="_blank" rel="noopener" className="text-blue-600 underline">線上諮詢</a></div>
        </section>
      </main>
    </div>
  );
}
